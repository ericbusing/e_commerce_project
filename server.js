const express = require("express");
const app = express();
const db = require("./models");
const bookRoutes = require("./routes/bookRoutes");
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", bookRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});
