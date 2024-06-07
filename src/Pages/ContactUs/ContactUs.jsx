import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
function ContactUs() {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        <h1 >ContactUs at mentoons@gmail.com</h1>
        <button onClick={()=>navigate('/')}>Back to home</button>
    </div>
  )
}

export default ContactUs