var mongoose = require('mongoose');

const validator = require('validator');

/**********RegistrationSchema**********/
var ContactSchema = mongoose.Schema({
    name : {
        type : String
    },
    email :{
        type : String
    },
    Phone :{
        type : String
    },
    password :{
        type:String
    },
    role:{
        type:String
    }
})

var contactfo = mongoose.model('contacts', UserSchema);

module.exports = {
    contactfo: contactfo
}
