import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [record,setRecord] = useState([])
    const navigate = useNavigate()

    const GetData = async() =>{
        try {
            const res = await axios.get(`https://contact-form-1rt6.onrender.com/api/v1/`);
            console.log(res.data);
            setRecord(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async(id)=>{
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/${id}`)
            toast.success("User Deleted Succssfully");
            GetData();
        } catch (error) {
            toast.error("Erro while Delete Record")
        }

    }
    useEffect(()=>{
        GetData();
    },[])
  return (
    <>
        <h1 className='text-center'>Admin Panel</h1>
        <hr />
        <div className="container">

        <table className='table table-hover'>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Action</th>
            </thead>
            <tbody>
                {record.map((r,index)=>{
                    return(
                        <tr id={index}>
                            <td>{r.name}</td>
                            <td>{r.email}</td>
                            <td>{r.contactNo}</td>
                            <td>
                                <button className='btn btn-warning mx-3' onClick={()=>navigate(`/admin/update/${r._id}`)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>handleDelete(r._id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Admin
