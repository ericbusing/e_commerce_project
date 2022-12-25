const express = require("express");
const app = express();
const db = require("./models");
const bookRoutes = require("./routes/bookRoutes");
const PORT = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(cors());

app.use("/api", bookRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});
