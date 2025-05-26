function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div> 
      <p> {project.title} </p>
      <br/>
      <p> {project.description} </p>
    </div>
  );
}

export default ProjectCard;
