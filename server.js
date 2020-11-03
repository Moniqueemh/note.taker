const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();
const notes = []

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./notes.html"))
})

app.get("/api/notes", (req, res) => {
    res.json(notes)
})

app.listen(PORT, () => {
    console.log("server has started @ http://localhost:" + PORT)
})