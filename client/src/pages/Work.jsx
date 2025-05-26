import axios from 'axios';
import { useEffect, useState } from 'react';
import WorkCard from '../components/WorkCard';

function Work() {
    const [work, setWork] = useState([]);

    const fetchWork = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/work");
            setWork(response.data.work);
            console.log(response.data.work);
        } catch (error) {
            console.error("Error fetching work data:", error);
        }
    }

    useEffect(() => {
        fetchWork();
    }, []);

    return (
        <div className = "fixed left-[30%] right-[30%] mt-10 space-y-3">
            {work.map((job) => (
                <WorkCard key={job.id} job={job} />
            ))}
        </div>
    );
}

export default Work;