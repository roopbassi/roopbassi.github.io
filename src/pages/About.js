import React from 'react'
import "./About.css"
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ToolsIcon from '@mui/icons-material/HomeRepairService';

function About() {
  return (
    <div className = "skills" id = "skills">
      <h1 className = "skills__header">Skills</h1> 
      <p className = "skills__subheader">My technical abilities as of now</p>
      <div className = "skills__container">
        <div className = "skills__content">
          <h2 className = "skills__title"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Languages</span> <CodeOutlinedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <div className = "skills__box">
          <div className = "skills__group">
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>Python</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>JavaScript</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>Java</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>HTML5</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>CSS3</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>C</h3>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className = "skills__content">
          <h2 className = "skills__title">Frameworks/Tools <ToolsIcon /></h2>
        <div className = "skills__box">
          <div className = "skills__group">
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>ReactJS</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>NodeJS</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>Java Swing</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>Git</h3>
              </div>
            </div>
            <div className = "skills__data">
              <div>
                <h3 className='skills__name'>Linux/Unix</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div> 
  )
}

export default About