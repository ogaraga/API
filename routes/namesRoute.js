const router = require('express').Router();
const myNames = require('../igboNames/names')

//post logic here
router.post('/api/names', async (req, res, next) => {
  const { name } = req.body;
  try {
    const foundName = await myNames.find(aham=>(aham.name === name) || (aham.name.toLowerCase() === name) || (aham.name.toUpperCase() === name));
    if (name === foundName.name.toLowerCase() || name === foundName.name.toUpperCase() || name === foundName.name)
      res.status(200).json(foundName);

  } catch (error) {
    res.json(error.message)
  }
  next();
});

//get logic
router.get('/api/names', async (req, res, next) => {
  const { name } = req.body;
  try {
    const foundName = await myNames.find(aham=>(aham.name === name) || (aham.name.toLowerCase() === name) || (aham.name.toUpperCase() === name));
    if (name === foundName.name.toLowerCase() || name === foundName.name.toUpperCase() || name === foundName.name)
      res.status(200).json(foundName);

  } catch (error) {
    res.json(error.message)
  }
  next();
});

module.exports = router; 