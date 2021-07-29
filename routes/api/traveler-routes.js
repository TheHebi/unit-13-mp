const router = require("express").Router();
const { Trip, Traveler, Location } = require("../../models");

router.get("/", async (req, res) => {
  try{
    const traveler = await Traveler.findAll({
      attributes: {exclude: [`createdAt`,`updatedAt`]}
    })
    res.status(200).json(traveler)
  }catch (err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.get("/:id", async (req, res) => {
  try{
    const traveler = await Traveler.findOne({
      where: {id:req.params.id},
      include: {model:Trip, attributes: {exclude: [`createdAt`,`updatedAt`]}},
      attributes: {exclude: [`createdAt`,`updatedAt`]},
    })
    res.status(200).json(traveler)
  }catch (err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.post("/", async (req, res) => {
  try{
    const newTraveler = await Traveler.create(req.body);
    res.status(200).json(newTraveler)
  }catch(err){
    console.log(err)
    res.status(400).json(err)
  }
});

router.delete("/:id", async (req, res) => {
  try{
    const delTraveler = await Traveler.destroy({
      where:{id:req.params.id}
    });
    res.status(200).json(delTraveler)
  }catch(err){
    console.log(err)
    res.status(400).json(err)
  }
});

module.exports = router;
