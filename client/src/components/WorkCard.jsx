import { useState } from "react";

function WorkCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <div
      className="work border p-3 rounded-2xl border-gray shadow-md shadow-gray-100 cursor-pointer transition-all duration-300"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl">{job.role}</h2>
          <h3 className="text-lg text-gray-600 mb-3">{job.company}</h3>
        </div>
        <div className="text-gray-600 mb-3">
          <p>
            {formatDate(job.startdate)} – {formatDate(job.enddate)}
          </p>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p>{job.description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
