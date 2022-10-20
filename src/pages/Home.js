import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link } from '@mui/material';
import "./Home.css";

function Home() {
  return (
    <div className = "home" id = "home">
      <div className = "about">
        <h2>Hi, my name is Roop!</h2>
        <div className = "prompt">
          <p>University student & teaching assistant.</p>
          <Link className = "icon" href = "https://www.linkedin.com/in/roop-b-83496a207/"><LinkedInIcon/></Link>
          <Link className = "icon" href= "https://github.com/roopbassi"><GitHubIcon/></Link> 
          <Link className = "icon" href= ""><InsertDriveFileIcon /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home