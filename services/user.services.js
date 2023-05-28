const User = require("../models/userModels")

exports.createUserService = async(userInfo)=>{
    const user = await User.create(userInfo)
    return user
}
exports.loginUserService = async(email)=>{
    const user = await User.findOne({email})
    return user
}
exports.getUserService = async()=>{
    const user = await User.find({})
    return user
}
exports.getAdminByEmainService = async (email) =>{
    const admin = await User.findOne({email})
    return admin
}

exports.getMerchantByEmainService = async (email) =>{
    const merchant = await User.findOne({email})
    return merchant
}
exports.getUserByEmainService = async (email) =>{
    const buyer = await User.findOne({email})
    return buyer
}
