function About() {
  return (
    <div className="mt-10 flex flex-col items-center">
      {/* Centered image in middle third */}
      <img
        className="w-60 h-60 border border-black object-cover object-center"
        src="/vienna-london.png"
        alt="Vienna in London"
      />

      {/* Left-aligned text constrained to 1/3 width and offset from left */}
      <div className="mt-10 w-[38%] text-left">
        <p>I'm born and raised in San Jose, CA, and I attend university in Nashville, TN. 
            I enjoy traveling and exploring the world. </p> <br/> 
        <p>
            Feel free to contact me at vienna.z.parnell@vanderbilt.edu! <br/>
        </p>

        <div className = "flex items-center justify-center mt-10 space-x-5">
            <a href = "https://github.com/viennap" target="_blank" rel="noopener noreferrer">
                <button className="rounded-lg p-3 py-1 border border-black">GitHub</button>
             </a>
            <a href = "https://www.linkedin.com/in/viennaparnell/" target="_blank" rel="noopener noreferrer">
                <button className="rounded-lg p-3 py-1 border border-black">LinkedIn</button>
            </a>

            <a 
                href="../public/Vienna Parnell Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <button className="rounded-lg p-3 py-1 border border-black">Resume</button>
            </a>
        </div>
        
      </div>
    </div>
  );
}

export default About;