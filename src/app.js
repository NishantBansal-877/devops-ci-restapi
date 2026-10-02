const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "DevOps CI/CD Demo API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.get("/version", (req, res) => {
  res.status(200).json({
    version: process.env.APP_VERSION || "development",
  });
});

app.get("/status", (req, res) => {
  res.status(200).json({
    service: "devops-node-ci",
    status: "running",
  });
});

module.exports = app;
