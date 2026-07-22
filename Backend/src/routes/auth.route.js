const express = require('express');
const { Register, login, forgetPassword, resetPassword } = require('../controllers/auth.controller');


const authRouter = express.Router();

authRouter.post('/register',Register)
authRouter.post('/login',login)
authRouter.post("/forgot-password",forgetPassword)
authRouter.post("/reset-password",resetPassword)

module.exports = authRouter