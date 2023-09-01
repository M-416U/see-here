const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./api/send-email");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.use("/api", sendEmail);

  // Handle all other routes with Next.js
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(
      `Server is running on port ${port} \t http://localhost:${port}`
    );
  });
});
