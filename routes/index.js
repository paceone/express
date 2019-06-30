const express = require('express');
const router = express.Router();
const login = 'admin';
const password = '123';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});





router.post('/login', (req, res) =>
{
  const body = req.body;

  if(body.login === login && body.password === password){

    res.redirect('admin')
  }else{
    res.redirect('../login');
  }
})
module.exports = router;
