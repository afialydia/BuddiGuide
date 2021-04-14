require("dotenv").config();
const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// set up rate limiter: maximum of 100 requests per 15 minutes
var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minute
  max: 100,
  message: "Give us a moment we're loading." 
});

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(compression());
server.use(limiter)

const strainRouter = require("./api/routes/strain_router");
const userRouter = require("./api/routes/user_router");

server.use("/api/strains", strainRouter);
server.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
	// Set static
	server.use(express.static("client/build"));
	server.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

module.exports = server;
