const express = require("express");
const Med = require("../models/medModels");

const router = express.Router();

router.get("/allmed", (req, res) => {
  //console.log("in route");
  Med.find()
    .then((result) => {
      //console.log(result);
      res.send(result);
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
});

module.exports = router;
