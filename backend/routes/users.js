const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({
    username,password,
  });


  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username, password: password}, function(err, user){
      if(err) {
          console.log(err)
          return res.status(501).send()
      }

      if(!user) {
          return res.status(405).send()
      }

      return res.status(200).send()
  })
})


module.exports = router;
