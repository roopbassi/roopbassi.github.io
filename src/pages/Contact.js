import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import "./Contact.css"
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div className = "contact" id = "contact">
      <h1 className = "contact__header"> Contact me</h1> 
      <p className = "contact__subheader">Contact me through Linkedin or email at roopbassi44@gmail.com</p>
      <div className = "icon__group">
        <Link className = "icons" href = "https://www.linkedin.com/in/roop-b-83496a207/"><LinkedInIcon/></Link>
        <a className = "icons"href="mailto:roopbassi44@gmail.com"><MailIcon/></a>
      </div>
    </div>
  )
}

export default Contact