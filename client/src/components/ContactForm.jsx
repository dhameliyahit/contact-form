import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import {Link} from 'react-router-dom'



const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (!name || !email || !contactNo) {
        toast.error("All feilds are require");
      }
      setLoading(true)
      const res = await axios.post(`https://contact-form-1rt6.onrender.com/api/v1/`, { name, email, contactNo })
      if (res.data.message === "User ALl ready exists") {
        toast.error("User Allready Exists")
        setLoading(false)
      } else {
        toast.success("Contact Share Successfully")
        setLoading(false)
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      <div className="container-fuild bg-dark text-light">
        <h1>Contact</h1>
        <Link to={"/admin"}>Admin</Link>
      </div>
      <div className="container">
        <h1 className="display-4 text-center">Contact Us</h1>
        <form className="row g-3">
          <div className="col-12">
            <div className="form-inline">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" className="form-control" required />
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="form-control" required />
              <label htmlFor="contact" className="form-label">Contact Number:</label>
              <input type="number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} id="contact" name="contact" className="form-control" required />
            </div>
          </div>
          <div className="col-12 text-center">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">{loading ? "Submiting ..." : "Submit"}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
