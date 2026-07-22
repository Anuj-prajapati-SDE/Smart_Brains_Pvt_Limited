const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        select:false // do this so if we fetch user password not forword
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    resetOTP:{
       type:String
    },

    resetOTPExpire:{
       type:Date
    }
    
},{timestamps:true});

const userModel = mongoose.model('user',userSchema);

module.exports = userModel