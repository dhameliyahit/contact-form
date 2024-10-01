const express = require("express")
const { getContact, AddData, updateData, deleteData } = require("../controllers/contactControllers")
const router = express.Router()

router.get("/",getContact)

router.post("/",AddData)

router.patch("/:id",updateData)

router.delete("/:id",deleteData)
module.exports = router