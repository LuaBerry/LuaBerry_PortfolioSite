import express from "express";
import morgan from "morgan";
import path from "path";
import apiRouter from "./api";
import DB from "./db";
import { cacheMiddleware } from "./middleware";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));

app.use("/api", apiRouter);

app.get("/projects/json", async (req, res) => {
    const projects = await new Promise((resolve) => {
        DB.all('SELECT * FROM Projects', [], (err, rows) => {
            if (err) console.error(err.message);
            else {
                rows.forEach(row => {
                row.skills = JSON.parse(row.skills);
            });
                resolve(rows);
            }
        });
    })
    return res.json(projects);
})

app.get("/vault/json", async (req, res) => {
    const vault = await new Promise((resolve) => {
        DB.all('SELECT * FROM Vault', [], (err, rows) => {
            if (err) console.error(err.message);
            else resolve(rows);
        });
    })
    return res.json(vault);
})

process.on('SIGINT', () => {
    DB.close((err) => {
        if (err) console.error('DB error on termination: ', err);
        else console.log('DB closed.');
        process.exit(err ? 1 : 0);
    });
})

app.use("/assets", cacheMiddleware, express.static("assets"));

app.use(express.static(path.join(__dirname,  ((process.argv[3] === "test") ? '../test_build' :'../build'))));
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, (process.argv[3] === "test") ? '../test_build/index.html' :'../build/index.html'));
});


export default app;