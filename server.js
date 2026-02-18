import http from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/bare/");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/bare")) {
    // let bare handle it
    bare.routeRequest(req, res);
  } else {
    // fallback
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      versions: ["v1", "v2", "v3"],
      language: "NodeJS"
    }));
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Bare backend running on port ${PORT}`);
});
