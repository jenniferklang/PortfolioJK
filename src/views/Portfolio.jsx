import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

function Portfolio() {
  const [projects, setProjects] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      fetchProjects();
    }
  }, [buttonClicked]);

  const fetchProjects = () => {
    fetch("/fetch.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
    setButtonClicked(true);
  };

  return (
    <>
      <div className="button-projects2">
        <button onClick={handleClick}>
          <p>My projects</p>
        </button>
      </div>

      <p>
        During my time at IT-Högskolan, I had the opportunity to work on various
        exciting projects. These experiences have allowed me to develop my
        skills in software development and web design. Collaborating with
        classmates and professionals in the industry has been a valuable
        learning experience. The guidance from my instructors has been
        instrumental in my growth and has fueled my passion for these fields.
        Overall, my journey at IT-Högskolan has been filled with hands-on
        projects that have provided me with a strong foundation for my future
        endeavors.
      </p>

      {projects ? (
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-3" key={project.projectId}>
              <div
                className="card"
                onMouseEnter={() => handleMouseEnter(project.projectId)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={project.projectImg} alt="Project" />
                <div className="card-body">
                  <h5 className="card-title">{project.projectName}</h5>
                  {hoveredProject === project.projectId ? (
                    <>
                      <p className="card-text">{project.projectDescription}</p>
                      <p className="card-text">
                        Duration: {project.projectDuration}
                      </p>
                      <p className="card-text">
                        Languages: {project.projectLanguages}
                      </p>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go to my Github
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Do you want to see my projects?</p>
      )}

      {isLiked ? (
        <FaRegSmile size={30} color="red" onClick={handleClick} />
      ) : (
        <div className="heart-icon">
          <p>{isLiked ? "Thanks!" : "Do you like my projects?"}</p>
          <FaHeart
            size={30}
            color={isLiked ? "red" : "black"}
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
}

export default Portfolio;
