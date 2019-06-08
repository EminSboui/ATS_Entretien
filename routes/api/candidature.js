const express = require('express');
const router = express.Router();

//Item Model
const Profile = require('../../models/profile');


router.get('/profiles',(req,res) => {
  Profile.find()
    .then(profiles => res.json(profiles))
});


router.post('/',(req,res) => {
  const newProfile = new Profile({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    poste: req.body.poste,
    num_tel: req.body.num_tel,
    cv: req.body.cv,
    message:req.body.message

  });
  console.log(newProfile)
  newProfile.save().then(profile => res.json(profile)); 
});

router.delete('/profile/:id',(req,res) => {
  Profile.findById(req.params.id)
});

module.exports = router;