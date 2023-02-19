const router = require("express").Router()
const express = require("express")
const app = express()
//const router = express.Router()
const uuid = require("../helpers/uuid")
const utils = require("../helpers/fsUtils")
//app.use(router)

router.get("/notes", (req, res) => {
  utils.readFromFile("./db/db.json")
    .then(data => res.json(JSON.parse(data)))
});

router.post("/notes", (req, res) => {
  console.log(req.body);

  if (req.body) {

    utils.readAndAppend(req.body, './db/db.json');
    res.json(`Success 🚀`);
  } else {
    res.error('Error');
  }
});
router.delete("/notes", (req, res) => {
  console.log(req.body);

  if (req.body) {

    utils.readAndAppend(req.body, './db/db.json');
    res.json(`Success 🚀`);
  } else {
    res.error('Error');
  }
  
});

module.exports = router;