const Contact = require("../models/contactModel.js")

const getContact = async(req,res) =>{
    try {
        const contacts = await Contact.find();
        return(
            res.status(200).json(contacts)
        ) 
    } catch (error) {
        console.log(error)
    }
}

const AddData =async (req,res)=>{
    const {name,email,contactNo} =  req.body;

     try {
        const user = await Contact.findOne({email})
        if(user){
            return res.json({
                message:"User ALl ready exists"
            })
        }
        const contacts = await Contact.create({name,email,contactNo})
        return(
            res.status(200).json(contacts)
        ) 
    } catch (error) {
        console.log(error)
    }
}

const updateData = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,email,contactNo} = req.body
        const user = await Contact.findOne({email})
        
        const updateUser = await Contact.findByIdAndUpdate(id,{name,email,contactNo})
        return res.status(200).json({
            success:true,
            message:"User Updated Successfully",
            updateUser
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteData = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id)
        return res.status(200).json({
            message:"User delete successfully",
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getContact,AddData,updateData,deleteData}