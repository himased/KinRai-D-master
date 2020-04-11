const router = require('express').Router();
let Registry = require('../models/registry.model');

router.route('/').get((req, res) => {
  Registry.find()
    .then(registries => res.json(registries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newRegistry = new Registry({
    username, password,
  });


  newRegistry.save()
    .then(() => res.json('Registry added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;