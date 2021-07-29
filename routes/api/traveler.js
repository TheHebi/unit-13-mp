const router = require('express').Router();
const { Trip, Traveler, Location } = require('../../models');

router.get('/', async (req, res) => {
    try{
      res.status(200).json(tag)
    }catch (err){}
  });

router.get('/:id', async (req, res) => {
    try{
      res.status(200).json(tag)
    }catch (err){}
  });

router.post('/', async (req, res) => {
    try{
      res.status(200).json(tag)
    }catch (err){}
  });

router.delete('/:id', async (req, res) => {
    try{
      res.status(200).json(tag)
    }catch (err){}
  });