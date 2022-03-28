const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const app = express();
const mainRoute = require("./routes/mainroute");

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(mainRoute);

// app.post("/shortUrls", async (req, res) => {
//   await ShortUrl.create({ full: req.body.fullUrl });
//   res.redirect("/");
// });

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl === null) return res.sendStatus(404);

  shortUrl.save();
  res.redirect(shortUrl.full);
});

app.listen(5000);
