import http from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/bare/");

// ✅ Create the server first
const server = http.createServer((req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bare backend is running!");
  }
});

// ✅ Use the correct dynamic port for Render
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Bare backend running on port ${PORT}`);
});
