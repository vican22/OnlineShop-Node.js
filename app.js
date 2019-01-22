const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRights = require("./routes/admin");
const shopRights = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRights);
app.use(shopRights);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
