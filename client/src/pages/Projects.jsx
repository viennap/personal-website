import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/projects");
            setProjects(response.data.projects);
            console.log(response.data.projects);
        } catch (error) {
            console.error("Error fetching work data:", error);
        }
    };

    useEffect(() => {
        fetchProjects(); 
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <ProjectCard key = {project.id} project = {project}/>
            ))}
        </div>
    );
}

export default Projects;