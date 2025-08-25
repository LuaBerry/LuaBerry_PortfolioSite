import fs from "fs";
import https from "https";

import "dotenv/config";
import "./Chat";
import "./Project";
import "./db";
import app from "./server";


const HTTPS_PORT = process.argv[2] || process.env.HTTPS_PORT || 8443;

const handleListeningHttps = () =>
    console.log(`Server listening on port https://localhost:${HTTPS_PORT}`);

const httpsOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH),
};  

https.createServer(httpsOptions, app).listen(HTTPS_PORT, handleListeningHttps);
