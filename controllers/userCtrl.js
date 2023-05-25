const { createUserService, loginUserService, getUserService, getAdminByEmainService, getMerchantByEmainService } = require("../services/user.services")
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtToken");

exports.createUser = async(req, res)=>{
    try {
        const result = await createUserService(req.body);
        console.log(result)
        res.status(200).json({
            status: "success",
            message: "create user success",
            data: result
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't create user",
            error: error.message
        })
    }
}
exports.loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body

       if (!email, !password) {
        return res.status(401).json({
            status: "login fail",
            error: "Please provide your credentials"
        })
       }
       const user = await loginUserService(email);

       if (!user) {
        return res.status(401).json({
            status: "login fail",
            error: "Please create an account"
        })
       }

       const isPasswordValid = bcrypt.compareSync(password, user.password)

       if (!isPasswordValid) {
        return res.status(403).json({
            status: "login fail",
            error: "Password is not correct"
        })
       }


       if(user.status != "active"){
        return res.status(401).json({
            status: "login fail",
            error: "your account not active"
        })
       }

       const token = generateToken(user)

       res.status(200).json({
        status: "success",
        message: "login success",
        data:{
            user,
            token,
        }
       })

    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: "can't create user",
            error: error.message
        })
    }
}
exports.getUser = async(req, res)=>{
    try {
        const result = await getUserService()
        res.status(200).json({
            status: "success",
            message: "Get user successfull",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get user",
            error: error.message
        })
    }
}
exports.getMe = async(req, res)=>{
    try {
        res.json(req.user)
        console.log(req.user)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get user",
            error: error.message
        })
    }
}

exports.getAdminByEmailController = async (req, res) =>{
    try {
        const {email} = req.params
        const user = await getAdminByEmainService({email: email})
        const isAdmin = user?.role === "admin";
        console.log(email, isAdmin)
        res.send({
            isAdmin: isAdmin
        })
    } catch (error) {
        console.log(error.message)
    }
}
exports.getMerchantByEmailController = async (req, res) =>{
    try {
        const {email} = req.params
        const user = await getMerchantByEmainService({email: email})
        const isMerchant = user?.role === "merchant";
        console.log(email, isMerchant)
        res.send({
            isMerchant: isMerchant
        })
    } catch (error) {
        console.log(error.message)
    }
}
exports.getUserByEmailController = async (req, res) =>{
    try {
        const {email} = req.params
        const user = await getMerchantByEmainService({email: email})
        const isUser = user?.role === "user";
        console.log(email, isUser)
        res.send({
            isUser: isUser
        })
    } catch (error) {
        console.log(error.message)
    }
}
