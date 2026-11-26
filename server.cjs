
const http = require("http");
const fs = require("fs");
const path = require("path");

const files = {
    "/": ["index.html", "text/html"],
    "/index.html": ["index.html", "text/html"],
    "/style.css": ["style.css", "text/css"],
    "/script.js": ["script.js", "text/javascript"]
};

http.createServer((req, res) => {
    const entry = files[req.url];

    if (!entry) {
        res.writeHead(404);
        return res.end("Not found");
    }

    const [filename, type] = entry;
    const content = fs.readFileSync(
        path.join(__dirname, filename)
    );

    res.writeHead(200, { "Content-Type": type });
    res.end(content);
}).listen(4173, () => {
    console.log("Store running at http://localhost:4173");
});
