import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 
  return (
    
    <div id="projects">
      
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((projectItem) =>{
        return <ProjectItem technologies= {projectItem.technologies} name ={projectItem.name} about={projectItem.about}  key ={projectItem.id}/>
        
      })}</div>
    </div>
  );
}

export default ProjectList;
