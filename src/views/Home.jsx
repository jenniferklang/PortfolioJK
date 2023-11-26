import image1 from "../assets/green-background-ny.jpg";
import image2 from "../assets/portfolio-ny.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";

function Home() {
  const [isEmployer, setIsEmployer] = useState(false);

  const handleClick = () => {
    console.log("Knappen klickades!");
  };

  const isInterested = true;

  const IsEmployer = () => {
    setIsEmployer((prevState) => !prevState);
  };

  return (
    <>
      <div className="image-container">
        <img src={image1} alt="Header Image" className="header-image" />
      </div>
      <div className="connect">
        <div className="text-container">
          <h1 className="intro1">
            Hi, I&apos;m a Javascript developer looking for new adventures
          </h1>
          {isInterested && (
            <>
              {isEmployer && (
                <h2 className="intro3">
                  Are you an employer? Let&apos;s connect!
                </h2>
              )}
              {!isEmployer && (
                <h2 className="intro3">
                  Do you want to get in touch with me? Book a meeting or send me
                  an email.
                </h2>
              )}
            </>
          )}
        </div>
        {isInterested && (
          <div className="portfolio-image-container">
            <img
              src={image2}
              alt="Portfolio Image"
              className="portfolio-image"
            />
          </div>
        )}
      </div>

      <div className="call-to-action">
        {isInterested && (
          <>
            {isEmployer ? (
              <Link to="/formular">
                <button onClick={handleClick}>Book a meeting</button>
              </Link>
            ) : (
              <button onClick={IsEmployer}>I&apos;m an employer</button>
            )}
          </>
        )}
        <a
          href="https://www.linkedin.com/in/jennifer-klang-243486171"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color={"#818a61"} />
        </a>

        <FaFacebookSquare size={30} color={"#818a61"} />
        <FaInstagramSquare size={30} color={"#818a61"} />
      </div>
    </>
  );
}

export default Home;
