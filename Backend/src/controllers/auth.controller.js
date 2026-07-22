const userModel = require('../model/auth.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require("validator")
const nodemailer = require("nodemailer")


async function Register(req, res) {
    try {
        const { username, email, password, role = 'user', adminSecretKey } = req.body;

        if (
            !validator.isEmail(email)
        ) {

            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            })

        }

        //VALIDATIO
        if (!username || !email || !password) {
            return res.status(409).json({
                success: false,
                messsage: 'fiels not be empty'
            })
        };

        // admin protection
        if (role === 'admin') {
            if (!adminSecretKey) {
                return res.status(401).json({
                    success: false,
                    message: 'admin secret key required'
                });
            }

            if (adminSecretKey !== process.env.ADMIN_SECRET) {
                return res.status(401).json({
                    success: false,
                    message: 'invalid admin secret key'
                });
            }
        };

        // check existing user
        const isUserAlreadyExisted = await userModel.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        })

        if (isUserAlreadyExisted) {
            return res.status(401).json({
                success: false,
                message: "User already existed"
            });
        };

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        });

        const token = await jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET);

        res.cookie('token', token) // using cookie middleware

        res.status(201).json({
            success: true,
            message: 'user register successfully'
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: 'internal error'
        })

    }
}

async function login(req, res) {
    try {
        const { username, password, email } = req.body;

        const isUserExist = await userModel.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        }).select("+password"); // to get password because in schema we select false

        if (!isUserExist) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        };

        const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: 'Password is wrong'
            });
        };

        const token = await jwt.sign({
            id: isUserExist._id,
            role: isUserExist.role
        }, process.env.JWT_SECRET);

        res.cookie('token', token)

        res.status(200).json({
            success: true,
            message: 'user login successfully',
            user: {
                id: isUserExist._id,
                username: isUserExist.username,
                email: isUserExist.email,
                role: isUserExist.role
            }
        });


    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: 'internal error',
        })
    }

}

async function forgetPassword(req, res) {
    try {
        const { email } = req.body;

        const user = await userModel.findOne({ email });


        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        };

        const otp = Math.floor(
            100000 +
            Math.random() * 900000
        )

        user.resetOTP = otp

        user.resetOTPExpire = Date.now() + 300000

        await user.save();

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user:
                    process.env.EMAIL,
                pass:
                    process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from:
                process.env.EMAIL,
            to:
                email,
            subject:
                "Reset Password",
            text:
                `OTP: ${otp}`
        })

        res.status(200).json({
            success: true,
            message:
                "OTP sent"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal error',
        })
    }
}

async function resetPassword(req,res) {
try {
    const {
        email,
        otp,
        newPassword
    } = req.body

    const user =
        await userModel.findOne({
            email
        })

    if (
        !user
       ) {
        return res.status(404).json({
                message:"user not found"})
        }
        if (
            user.resetOTP != otp
        ) {
        return res.status(401).json({
                message:"Invalid OTP"})
        }
        if (Date.now()>user.resetOTPExpire) {
            return re.status(401).json({
                    message:"OTP expired"})
        }

        user.password =await bcrypt.hash(newPassword,10)

        user.resetOTP =null

        user.resetOTPExpire =null

        await user.save()

        res.status(200).json({
            success: true,
            message: "Password updated"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal error',
        })
    }

}

module.exports = { Register, login ,forgetPassword,resetPassword}