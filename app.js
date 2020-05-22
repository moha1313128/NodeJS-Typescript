"use strict";
exports.__esModule = true;
var http = require("http");
http
    .createServer(function (req, res) {
    res.end("hello World");
})
    .listen(3000, function () { return console.log("Server running"); });
