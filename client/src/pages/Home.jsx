function Home() {
  return (
    <div className = "fixed left-[30%] right-[30%] mt-10">
      <h1 className="text-xl">Vienna Parnell</h1>
      <p className="text-lg text-gray-600 mb-12">Computer Science Student</p>
      <p>
        I am a rising senior at Vanderbilt University majoring in computer science and applied mathematics
        with a minor in engineering management. I anticipate graduating in May 2026.
        </p> <br/> <p> My interests lie in the intersection of technology, multimedia, and human-computer interaction.</p>
        <br/> <p> I'm currently interning at Netflix on the Creative Post Production team. </p>

        <div className = "flex items-center mt-10">
            <a 
                href="../public/Vienna Parnell Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <button className="rounded-lg p-3 py-1 border border-black">Resume</button>
            </a>
            <p className = "ml-5 italic"> Actively seeking Fall 2025 opportunities in SWE + PM. Willing to relocate. </p>
        </div>
    </div>
  );
}

export default Home;
