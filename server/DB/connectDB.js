const mongoose = require("mongoose")

const connectDB = async(DB_URL) =>{
    try {
      const connect =await mongoose.connect(DB_URL)  
      console.log('DB connect Successfully ' + connect.connection.host)
    } catch (error) {
        console.log('Error while Connect Db')
    }
}

module.exports = connectDB