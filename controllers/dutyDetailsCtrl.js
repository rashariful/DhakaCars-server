const asyncHandler = require("express-async-handler");
const { CURSOR_FLAGS } = require("mongodb");
const DutyDetails = require("../models//dutyDetailsModels");


// create DutyDetails
const createDutyDetails = asyncHandler(async (req, res) => {
    try {
        const newDutyDetails = await DutyDetails.create(req.body)
        res.json({
            success: true,
            message: "Successfully Added a Duty Details",
            data: newDutyDetails
        })
    } catch (error) {
        throw new Error(error.message)
    }
})


// Get DutyDetails by id
const getSingleDutyDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findDutyDetails = await DutyDetails.findById(id);
        res.json({
            success: true,
            message: "Get a single Duty Details",
            data: findDutyDetails
        })
    } catch (error) {
        throw new Error(error.message)
    }
})
// Get DutyDetails by Email
const getDutyDetailsByEmail = asyncHandler(async (req, res) => {
    try {
        const {email} = req.query;
        const query = {email: email}
        const findDutyDetailsEmail = await DutyDetails.find(query);
            res.json({
                success: true,
                message: "Get Duty Details by Email",
                data: findDutyDetailsEmail
            })
    } catch (error) {
        throw new Error(error.message)
    }
})


// // Get all product
const getAllDutyDetails = asyncHandler(async(req, res)=>{
    try {
        const getallDutyDetails = await DutyDetails.find()
        res.json({
            success: true,
            message: "Get All Duty Details",
            data: getallDutyDetails
        })
    } catch (error) {
        throw new Error(error.message)
    }
})

// update product
const updateDutyDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateaDutyDetails = await DutyDetails.findByIdAndUpdate(id, req.body, {
            new: true,

        }) 
        res.json({
            success: true,
            message: "Successfully updated Duty Details",
            data: updateaDutyDetails
        })
    } catch (error) {
        throw new Error(error.message)
    }
})
// Delete Product by id
const deleteDutyDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteaDutyDetails = await DutyDetails.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Successfully Deleted Duty Details",
            data: deleteaDutyDetails
        })
    } catch (error) {
        throw new Error(error.message)

    }
})
// // Filter products
// const getAllProduct = asyncHandler(async (req, res) => {
//     try {
//         const queryObj = { ...req.query }
//         const excludeFeilds = ["page", "sort", "limit", "fields"];
//         excludeFeilds.forEach((el) => delete queryObj[el]);
//         let queryStr = JSON.stringify(queryObj);
//         queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

//         let query = Product.find(JSON.parse(queryStr))

//         // Sorting
//         if (req.query.sort) {
//             const sortBy = req.query.sort.split(",").join(" ");
//             query = query.sort(sortBy)
//         } else {
//             query = query.sort("-createdAt");
//         }

//         // Limiting the fields

//         if (req.query.fields) {
//             const fields = req.query.fields.split(",").join(" ")
//             query = query.select(fields);

//         } else {
//             query = query.select("-__v");
//         }

//         // Pagination
//         const page = req.query.page;
//         const limit = req.query.limit;
//         const skip = (page - 1) * limit;
//         query = query.skip(skip).limit(limit);

//         if (req.query.page) {
//             const productCount = await Product.countDocuments();
//             if (skip >= productCount)
//                 throw new Error("THis page does not exists");
//         }

//         const product = await query;
//         res.json(product)
//     } catch (error) {

//     }
// })

module.exports = {
    createDutyDetails,
    getSingleDutyDetails,
    getAllDutyDetails,
    updateDutyDetails,
    deleteDutyDetails,
     getDutyDetailsByEmail
}