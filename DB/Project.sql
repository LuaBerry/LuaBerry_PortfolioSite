DROP TABLE IF EXISTS Projects;
CREATE TABLE Projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    link TEXT DEFAULT '',
    image TEXT NOT NULL,
    preview TEXT,
    field TEXT,
    description TEXT NOT NULL,
    descriptionKR TEXT NOT NULL,
    skills TEXT NOT NULL,
    time TEXT NOT NULL
);

INSERT INTO Projects (title, link, image, preview, field, description, descriptionKR, skills, time)
VALUES (
    'Wetube',
    'https://github.com/Baskin-Lazpberry/FullStack-YouTube_Clone',
    '/assets/img/wetubeOpt.jpg?v=1',
    '/assets/video/preparing.mp4',
    'Web',
    'Fullstack YouTube clone website',
    '유튜브 클론 풀스택 웹사이트',
    '["MongoDB", "Express", "Pug", "node.js"]',
    '2023.05'
), (
    'Movie Ratings',
    'https://github.com/LuaBerry/React-MovieReviewWebsite',
    '/assets/img/movieRatingOpt.jpg?v=1',
    'https://luaberry.github.io/React-MovieReviewWebsite/',
    'Web',
    'Movie Review Website with React',
    '리액트 영화 리뷰 웹사이트',
    '["React.js"]',
    '2022.05'
), (
    'Side Scroll Game',
    'https://github.com/Baskin-Lazpberry/UE4-SideScrollGame',
    '/assets/img/sideScrollGameOpt.jpg?v=1',
    '/assets/video/sidescroll2.mp4',
    'Game',
    'Side Scroll RPG with Unreal Engine 4',
    '언리얼 엔진 4로 구현한 횡스크롤 RPG',
    '["Unreal Engine4", "Blueprint", "Cinematics"]',
    '2022.04'
), (
    'Hidden world',
    '',
    '/assets/img/hiddenworld.jpg?v=2',
    '/assets/video/hiddenworld.mp4',
    'Game',
    'Mobile marine tourism app for Jeju Island.',
    '제주도 해양 관광 앱, 외주 프로젝트',
    '["Unity Engine", "AR", "3D Animation", "Mobile Optimization"]',
    '2021.02'
), (
    'Chord Block',
    '',
    '/assets/img/chordblock.jpg?v=1',
    '/assets/video/chord.mp4',
    'Game',
    'Rhythm game supporting digital piano inputs',
    '전자 피아노 연동 리듬게임',
    '["Unity Engine"]',
    '2019.11'
);