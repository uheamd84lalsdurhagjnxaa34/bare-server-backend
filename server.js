import http from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

// Create Bare server at /bare/
const bare = createBareServer("/bare/");

// Register versions so Bare knows what to serve
bare.registerVersion("v1", { language: "NodeJS" });
bare.registerVersion("v2", { language: "NodeJS" });
bare.registerVersion("v3", { language: "NodeJS" });

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
