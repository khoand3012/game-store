const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Got a get request!");
  console.log("Hello World!");
});

module.exports = router;
