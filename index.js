import express from "express";
const app = express();
const port = 3000;

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
    // res.send("<h1>dobby is a poophead</h1>");
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "public/" + "styles.css");
  });

app.get("/contact", (req, res) => {
    res.send("<h1>you can reach dobby by meowing constantly (his favourite thing)</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>dobby is a cat with poop for a head.</h1>");
});

app.post("/submit", (req, res) => {
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});