const express = require("express");
require("./db");
const userroutes = require("./routes/userRoutes");
const medroutes = require("./routes/medRoutes");

const app = express();

app.use(express.json());

const port = 5000;

app.use("/api/user", userroutes);
app.use("/api/med", medroutes);

app.listen(port, () => console.log("Server Listening at 5000"));
