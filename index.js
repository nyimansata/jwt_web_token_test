require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const AuthRoute = require("./routes/auths");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/auth", AuthRoute);

// port and DB
mongoose
  .connect(process.env.DB_URL, { dbName: "jwt_web_token" })
  .then(() => {
    console.log("db connected");
    const port = process.env.P0RT || 5000;
    app.listen(port, () => {
      console.log("Listening to port:", { port });
    });
  })
  .catch((error) => {
    console.log("database failed to connect", error.message);
  });
