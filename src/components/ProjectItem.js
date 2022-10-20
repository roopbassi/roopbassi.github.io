import React from 'react'

function ProjectItem({ image, name }) {
  return (
    <div className = "projectItem">
        <div style = {{backgroundImage: `url(${image})`}} className = "bgImage"/>
        <h4 className = "project__name"> {name} </h4>
    </div>
  )
}

export default ProjectItem