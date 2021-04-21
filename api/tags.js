const express = require('express');
const { getAlltags } = require('../db');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");
  
    next();
  });
  
  tagsRouter.get('/', async (req, res) => {
    const tags = await getAlltags();
  
    res.send({
      tags
    });
  });


module.exports = tagsRouter;