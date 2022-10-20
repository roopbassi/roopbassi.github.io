import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Discord from '../assets/discord-logo.jpg';
import Website from '../assets/website.jpg';
import Extension from '../assets/chrome-extension.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

import "./Projects.css";

function Projects() {
  return (
    <div className = "projects" id = "projects">
      <h1 className = "projects__header">My Personal Projects</h1>
      <p className = "projects__subheader">Some projects that I created so far</p>
      <div className="projectList">
        <Link href= "https://github.com/roopbassi/Discord-Joke-Bot"><ProjectItem name = "Discord Bot" image = {Discord}/></Link>
        <Link href= "https://github.com/roopbassi/"><ProjectItem name = "Personal Website" image = {Website}/></Link>
        <Link href= "https://github.com/roopbassi/WLU-Bookmark-Extension"><ProjectItem name = "Chrome Extension" image = {Extension}/></Link>
      </div>
      <p className = "projects__ending">Check out more projects on my GitHub!</p>
      <Link className = "projects__icon" href= "https://github.com/roopbassi"><GitHubIcon/></Link> 
    </div>
  )
}

export default Projects