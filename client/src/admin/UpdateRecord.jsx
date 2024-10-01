import React,{useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRecord = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [loading,setLoading] = useState(false)

    const param = useParams()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
          if (!name || !email || !contactNo) {
            toast.error("All feilds are require");
          }
          setLoading(true)
          const res = await axios.patch(`https://contact-form-1rt6.onrender.com/api/v1/${param.id}`, { name, email, contactNo })
          toast.success("User Updated Successfully");
          navigate("/admin")
        } catch (error) {
          console.log(error);
            toast.error("Error while Update User")
        }
    }
  return (
    <div className="container">
    <h1 className="display-4 text-center">Update Contact</h1>
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
  )
}

export default UpdateRecord
