const express = require('express');
const router = express.Router();

//render ra trang home (views/index.hbs)
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/greenwich', (req, res) => {
  res.render('greenwichvietnam');
});

router.get('/demo', (req, res) => {
  var city = 'hanoi';
  var district = 'cau giay';
  res.render('demo', { city, district });
});

router.get('/test', (req, res) => {
  var countries = ['VietNam', 'Singapore', 'Thailand', 'Malaysia', 'Indonesia'];
  var sports = ['Volleyball', 'Football', 'Badminton'];
  res.render('country', { countries, sports });
});

module.exports = router;
