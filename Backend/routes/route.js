const express=require('express');
const insertItem = require('../controllers/insertItem');
const fetchItems = require('../controllers/fetchItems');
const searchItem = require('../controllers/searchItem');
const router=express.Router();
router.post('/insert',insertItem);
router.get('/fetchItems',fetchItems);
router.post('/searchItems',searchItem);
module.exports=router;