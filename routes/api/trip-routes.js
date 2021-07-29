const router = require("express").Router();
const { Trip, Traveler, Location } = require("../../models");

router.post("/", async (req, res) => {
  try{
    const newTrip = await Trip.create(req.body);
    res.status(200).json(newTrip)
  }catch(err){
    console.log(err)
    res.status(400).json(err)
  }
});

router.delete("/:id", async (req, res) => {
  try{
    const delTrip = await Trip.destroy({
      where:{id:req.params.id}
    });
    res.status(200).json(delTrip)
  }catch(err){
    console.log(err)
    res.status(400).json(err)
  }
});

module.exports = router;
