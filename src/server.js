import express from "express";
import morgan from "morgan";
import path from "path";
import DB from "./db";
import { cacheMiddleware } from "./middleware";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
/*
app.use(session({
    secret: process.env.COOKIE_SECRET,
    cookie: { maxAge: 1000 * 60 * 30 },
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_LINK})
})) 
app.use(localsMiddleware);
*/


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

// app.get("/projects/edit/json/:id", async (req, res) => {
//     const project = await new Promise((resolve) => {
//         const stmt = DB.prepare('SELECT * FROM Projects WHERE id = ?')
//         const {id} = req.params;
//         console.log('SELECT * FROM Projects WHERE id = ', id);
//         stmt.get(id, (err, rows) => {
//             if (err) console.error(err.message);
//             else resolve(rows);
//         })
//     })
//     return res.json(project);
// })

// app.post("/projects/edit/update/:id", async (req, res) => {
//     const { title, link, image, preview, field, 
//         description, descriptionKR, skills, time } = req.body;
//     const {id} = req.params;

//     const arr = JSON.parse(skills);
//     if(!Array.isArray(arr)) return res.status(400).redirect((id) ? ("/projects/edit/" + id) : ("/projects/create"));

//     const stmt = (id) ? DB.prepare(`UPDATE Projects SET title = ?, link = ?, image = ?, preview = ?, field = ?, description = ?, descriptionKR = ?, skills = ?, time = ?`) 
//     : DB.prepare(`INSERT INTO Projects (title, link, image, preview, field, description, descriptionKR, skills, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);

//     await stmt.run(title, link, image, preview, field, description, descriptionKR, skills, time);

//     return res.redirect("/projects");
// })

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