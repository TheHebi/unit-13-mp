const router = require("express").Router();
const { builtinModules } = require("module");
const { Trip, Traveler, Location } = require("../../models");

router.get("/", async (req, res) => {
  try{
    const location = await Location.findAll({
      attributes: {exclude: [`createdAt`,`updatedAt`]}
    })
    res.status(200).json(location)
  }catch (err){
    console.log(err)
    res.status(500).json(err)
  }
});

router.get("/:id", async (req, res) => {
  try{
    const traveler = await Location.findOne({
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
    const newLocation = await Location.create(req.body);
    res.status(200).json(newLocation)
  }catch(err){
    console.log(err)
    res.status(400).json(err)
  }
});

router.delete("/:id", async (req, res) => {
  try{
    const delLocation = await Location.destroy({
      where:{id:req.params.id}
    });
    res.status(200).json(delLocation)
  }catch(err){
    console.log(err)
    res.status(400).json(err)
  }
});

module.exports = router;
