const http = require("http");

const PORT = 5005;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify({
    message: "GitHub Actions Docker practice",
    status: "success"
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
