const express = require("express");
const router = require("./routes/testRoutes");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
//Database connection hmeha env ke bad hi call krte h
require("./config/db");
require("./models/userModel");
//rest obj
const app = express();
//port
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTES
app.use("/", router);
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
//listen
app.listen(port, () => {
  console.log(
    `Node server running In ${process.env.DEV_MODE} Mode on port: ${port}`.bgRed
      .red
  );
});
