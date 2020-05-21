const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  //! const codingGenius = { name: 'Isaac', age: 48, cool: true };
  //! res.json(codingGenius);
  res.render('hello', {
    name: 'Isaac', 
    age: 43, 
    cool: true,
    title: 'grvlnt'
  });
});

module.exports = router;
