import http from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

// Create the Bare server at /bare/
const bare = createBareServer("/bare/");

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/bare/")) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bare backend is running!");
  }
});

// Use dynamic port for Render
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Bare backend running on port ${PORT}`);
});
