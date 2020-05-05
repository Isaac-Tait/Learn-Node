const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const codingGenius = { name: 'Isaac', age: 48, cool: true };
  //* res.send('Hey! It works!');
  res.json(codingGenius);
});

module.exports = router;
