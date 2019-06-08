const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const ProfileSchema = new Schema({
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    email: {
        type: String,
    },
    num_tel: {
        type: String,
    },
    poste: {
        type: String,
        enum: [
            'Stage', 'PFE'
        ],
        default: "Stage"
    },
    cv: {
        type: String,
    },
    message: {
        type: String,
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
