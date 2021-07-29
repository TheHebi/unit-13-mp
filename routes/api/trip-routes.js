const router = require("express").Router();
const { Trip, Traveler, Location } = require("../../models");

router.post("/", async (req, res) => {
  try {
    res.status(200).json(tag);
  } catch (err) {}
});

router.delete("/:id", async (req, res) => {
  try {
    res.status(200).json(tag);
  } catch (err) {}
});

module.exports = router;
