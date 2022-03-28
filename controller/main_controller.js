const ShortUrl = require("../models/shortUrl");

exports.getUrls = async (req, res, next) => {
  const shortUrls = await ShortUrl.find();

  res.render("main.ejs", { shortUrls: shortUrls, inputError: "input_error" });
  // console.log(shortUrls.length)
};

exports.addUrl = async (req, res, next) => {
  if(req.body.fullUrl === null || req.body.fullUrl == ''){
    res.
  }
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
};

exports.urlLength = (req,res,next)=>{
    if (req.body.fullUrl === null || req.body.fullUrl == ''){
        console.log('empty input')
        res.sendStatus(404)
    }
}

// app.get("/:shortUrl", async (req, res) => {
//   const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
//   if (shortUrl === null) return res.sendStatus(404);

//   shortUrl.save();
//   res.redirect(shortUrl.full);
// });
