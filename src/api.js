import axios from 'axios';
import express from 'express';

const apiRouter = express.Router();

const cache = new Map();
const cacheDuration = 3600; // Cache duration in seconds

// Simple in-memory cache middleware
const cacheAPI = (req) => {
    const key = req.originalUrl;
    if (cache.has(key)) {
        const content = cache.get(key);
        if ((Date.now() - content.timestamp) < cacheDuration * 1000) {
            return content;
        }
    }
    return false;
};

apiRouter.get("/waka", async (req, res) => {
    const cachedResponse = cacheAPI(req);
    if (cachedResponse) {
        console.log("Serving /waka from cache");
        return res.json({hours: cachedResponse.hours});
    }
    const {data} = await axios.get(process.env.WAKA_API_URL);
    const hours =  Math.round(data.data.grand_total.total_seconds_including_other_language / 3600)
        + 1200; // Estimated code time from 2015 to 2024 is 1200h (code time for one semester is 180h)
    cache.set(req.originalUrl, {hours, timestamp: Date.now()});
    return res.json({hours});
});

apiRouter.get("/youtube", async (req, res) => {
    const cachedResponse = cacheAPI(req);
    if (cachedResponse) {
        console.log("Serving /youtube from cache");
        return res.json(cachedResponse.result);
    }
    try {
        const channel_id = "UC_vIK-ZGd_CVZDrmXJKvv6Q";
        const ch = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
            params: { part: "contentDetails", id: channel_id, key: process.env.YOUTUBE_API_KEY },
        });
        const uploads = ch.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
        const pl = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            params: {
                part: "snippet,contentDetails",
                playlistId: uploads,
                maxResults: 1,
                fields: "items(contentDetails/videoId,snippet/title)",
                key: process.env.YOUTUBE_API_KEY,
            },
            });
        const it = pl.data.items?.[0];
        const title = it?.snippet?.title;
        const url = it ? `https://youtu.be/${it.contentDetails.videoId}` : null;
        const result = { title, url };
        cache.set(req.originalUrl, { result, timestamp: Date.now() });
        return res.json(result);
    } catch (error) {
        console.error('YouTube API Error:', error.response?.data || error.message);
        return res.json({ title: "Unable to fetch video", url: null });
    }
});

apiRouter.get("/github", async (req, res) => {
    const cachedResponse = cacheAPI(req);
    if (cachedResponse) {
        console.log("Serving /github from cache");
        return res.json(cachedResponse.result);
    }
    const {data: repo} = await axios.get('https://api.github.com/users/LuaBerry/repos?sort=updated');
    var today = new Date();
    var weekago = new Date(today - (7 * 86400000));
    const {data: commit} = await axios.get(`https://api.github.com/search/commits?q=author:LuaBerry+committer-date:${weekago.toISOString()}..${today.toISOString()}`);
    const result = { repo, commit: commit.total_count };
    cache.set(req.originalUrl, { result, timestamp: Date.now() });
    return res.json(result);
});

apiRouter.get("/thread", async (req, res) => {
    const cachedResponse = cacheAPI(req);
    if (cachedResponse) {
        return res.json(cachedResponse.result);
    }
    
    try {
        // Threads API를 사용해서 @luaberry1012의 최신 포스트 가져오기
        const response = await axios.get('https://graph.threads.net/me/threads', {
            params: {
                fields: 'id,text,timestamp,permalink,media_type',
                limit: 1,
                access_token: process.env.THREAD_ACCESS_TOKEN
            }
        });
        
        const latestPost = response.data.data?.[0];
        
        if (!latestPost) {
            const fallback = { 
                title: "No recent posts", 
                url: null,
                timestamp: null
            };
            cache.set(req.originalUrl, { ...fallback, timestamp: Date.now() });
            return res.json(fallback);
        }
        
        const result = {
            title: latestPost.text 
                ? latestPost.text.replace(/\s+/g, ' ').trim().slice(0, 15) + (latestPost.text.replace(/\s+/g, ' ').trim().length > 15 ? '...' : '')
                : "Recent Thread Post",
            url: latestPost.permalink || `https://threads.net/@luaberry1012/post/${latestPost.id}`,
            timestamp: latestPost.timestamp,
            id: latestPost.id
        };
        
        cache.set(req.originalUrl, { result, timestamp: Date.now() });
        return res.json(result);
        
    } catch (error) {
        console.error('Threads API Error:', error.response?.data || error.message);
        
        // 캐시된 데이터가 있으면 그것을 반환 (fallback)
        const cachedFallback = cacheAPI(req);
        if (cachedFallback) {
            return res.json(cachedFallback);
        }
        
        const fallback = { 
            title: "Unable to fetch recent posts", 
            url: "https://threads.net/@luaberry1012",
            timestamp: null
        };
        return res.json(fallback);
    }
});

export default apiRouter;