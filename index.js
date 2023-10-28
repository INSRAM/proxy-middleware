const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Define a middleware to proxy requests to the target website's homepage
const proxy = createProxyMiddleware("/", {
  target: "https://rcsxpress.com/", // Replace with the target website's URL
  changeOrigin: true, // Change the "Host" header to match the target's host
});

app.use("/", proxy);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
