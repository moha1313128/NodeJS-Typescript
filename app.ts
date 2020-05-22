import * as http from "http";
http
  .createServer((req, res) => {
    res.end("hello World");
  })
  .listen(3000, () => console.log("Server running"));
