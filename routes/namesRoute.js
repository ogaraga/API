const router = require('express').Router();
const myNames = require('../allNames/names')

router.get('/api/names', async (req, res, next) => {
    try {
    if (await myNames.find(aham=>(aham.name))){
      res.status(200).json({
        Message:' Names found!',
        NameInfo: myNames
      });
     }
     else{
      res.status(404).json('Names not found!')
     } 
  } catch (error) {
    res.json('Something went wrong!')
  }
  next()
});

module.exports = router; 