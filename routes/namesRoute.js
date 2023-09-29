const router = require('express').Router();
const myNames = require('../igboNames/names')

// //post logic here
// router.post('/api/names', async (req, res, next) => {
//   const { name } = req.body;
//   try {
//     const foundName = await myNames.find(aham=>(aham.name === name) || (aham.name.toLowerCase() === name) || (aham.name.toUpperCase() === name));
//     if (name === foundName.name.toLowerCase() || name === foundName.name.toUpperCase() || name === foundName.name)
//       res.status(201).json(
//   {
//     Message:' Name Created',
//     NameInfo: foundName
//   }
// );
//   } catch (error) {
//     res.json(error.message)
//   }
//   next();
// });


//get logic
router.get('/api/names', async (req, res, next) => {
  const { name } = req.body;
  try {
    const foundName = await myNames.find(aham=>(aham.name === name) || (aham.name.toLowerCase() === name) || (aham.name.toUpperCase() === name));
    if (name === foundName.name.toLowerCase() || name === foundName.name.toUpperCase() || name === foundName.name)
      res.status(200).json({
        Message:' Name found!',
        NameInfo: foundName
      });
      
  } catch (error) {
    res.json('Error-Message: {Name undefined or  not found!}')
  }
  next();
});

module.exports = router; 