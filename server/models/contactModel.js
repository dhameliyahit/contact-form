const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        name:{type:String,required:[true,"name is require"]},
        email:{type:String,required:[true,"email is require"],unique:true},
        contactNo:{type:Number,required:[true,"Contact is require"]}
    }
)

module.exports = mongoose.model("contact",contactSchema)