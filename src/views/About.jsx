import aboutImage from "../assets/portfolio.jpeg";

function About() {
  const handleClick = () => {
    console.log("Knappen klickades!");
  };
  return (
    <main className="page-about">
      <div className="grid-container">
        <div className="text-about">
          <p>
            I am an aspiring JavaScript developer seeking an opportunity to
            establish myself in the tech industry. With a background in creative
            and service-oriented roles, I chose to pursue a JavaScript
            development education at IT-Högskolan in Gothenburg.
            <p>
              I am captivated by the ever-evolving nature of the tech industry
              and the freedom it offers for creative expression. My analytical
              mindset and problem-solving skills enable me to excel in this
              field.
            </p>
            By combining my previous experiences with my passion for
            programming, I am confident in my ability to create impactful
            solutions in the future.
          </p>
        </div>
        <div className="image-about">
          <img src={aboutImage} alt="About" />
        </div>
        <div className="download">
          <button onClick={handleClick}>Download Resume</button>
        </div>
      </div>
    </main>
  );
}

export default About;
