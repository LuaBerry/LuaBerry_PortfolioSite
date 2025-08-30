import path from "path";
import sqlite3 from "sqlite3";

const DB_Path = path.join(__dirname, "../DB/luaberry.db");

const DB = new sqlite3.Database(DB_Path, (err) => {
    if(err) return console.log("DB error: ", error);
    console.log("Connected to DB")
});

export default DB;