require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/users");
const app = express();

// routes
app.use("/api/v1/users", UserRoute);

// port
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
