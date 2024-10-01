import ContactForm from "./components/ContactForm";
import {Toaster} from 'react-hot-toast'
import {Routes,Route} from 'react-router-dom'
import Admin from "./admin/Admin";
import UpdateRecord from "./admin/UpdateRecord";

export default function App(){
  return(
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<ContactForm/>} />
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/update/:id" element={<UpdateRecord/>}/>
      <Route path="/*" element={<h3>404 | Page Not Found</h3>}/>
    </Routes>
    </>
  )
}