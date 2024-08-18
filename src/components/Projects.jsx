import { forwardRef } from "react";
import Marquee from "../utils/Marquee";
import razorpay from "../assets/razorpay.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sqlite from "../assets/sqlite.png";
import figma from "../assets/figma.png";
import sign from "../assets/sign.png";
import nike from "../assets/nike.png";
import streamlit from "../assets/streamlit.png";
import python from "../assets/python.png";
import disease from "../assets/disease.png";
import weather from "../assets/weather.png";
import movie from "../assets/movie.png";
import obys from "../assets/obys.png";
import PropTypes from "prop-types";
import "./projects.css";


const Projects = forwardRef(({textColor}, ref) => {
  const items = ["Projects", "Projects", "Projects", "Projects", "Projects"];

  return (
    <div className="projects" ref={ref} style={{ "--color": textColor }}>
      <Marquee items={items} textColor={textColor} />

      <div className="project-container">
        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={movie} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>NETFLIX GPT</h1>
                  <p>
                    Netflix GPT is an innovative web application that allows
                    users to browse movies recommended by a GPT-3 model based on
                    their preferences and ratings. Developed using React for the
                    front-end, Firebase for back-end services, and Redux for
                    state management, it offers a dynamic and responsive user
                    experience. The application integrates TMDB API to fetch
                    movie data, and all styled with Tailwind CSS for a modern
                    look.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a
                      href="https://netflix-gpt-jade-five.vercel.app/"
                      target="_blank">
                      View Site
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/aniketkumar7/NETFLIX_GPT"
                      target="_blank">
                      View Code
                    </a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={react} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={redux} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={firebase} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={disease} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>Disease Prediction App</h1>
                  <p>
                    This web application employs Streamlit and Python to predict
                    diseases based on symptoms entered by users. Utilizing
                    machine learning techniques, it offers insights into
                    potential health issues, making it a valuable tool for early
                    diagnosis and health awareness.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a href="#">View Site</a>
                  </button>
                  <button>
                    <a href="#">View Code</a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={python} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={sqlite} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={streamlit} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={razorpay} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>Razorpay Clone</h1>
                  <p>
                    Developed using React and Tailwind CSS, this project
                    replicates the user interface of Razorpay, focusing solely
                    on design. It showcases modern web design principles and
                    provides a clean, responsive layout for payment processing
                    applications.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a
                      href="https://razor-pay-clone-six.vercel.app/"
                      target="_blank">
                      View Site
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/aniketkumar7/RazorPay_Clone"
                      target="_blank">
                      View Code
                    </a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={react} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={tailwind} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={obys} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>OBYS UI</h1>
                  <p>
                    The OBYS UI project is a design-only clone created with
                    HTML, CSS, and JavaScript. It emphasizes aesthetic appeal
                    and user experience, providing a visually engaging interface
                    for users interacting with the application.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a href="https://obys-clone.vercel.app/" target="_blank">
                      View Site
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/aniketkumar7/OBYS-Clone"
                      target="_blank">
                      View Code
                    </a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={html} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={css} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={js} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={weather} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>Weather App</h1>
                  <p>
                    This application, built with HTML, CSS, and JavaScript,
                    utilizes a weather API to deliver accurate weather forecasts
                    based on user-defined locations. It simplifies access to
                    real-time weather information, aiding users in planning
                    their activities accordingly.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a
                      href="https://weather-app-orpin-chi-53.vercel.app/"
                      target="_blank">
                      View Site
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/aniketkumar7/Weather_App"
                      target="_blank">
                      View Code
                    </a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={html} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={css} alt="" />
                  </div>
                  <div className="tech-img">
                    <img src={js} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={sign} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>Sign In & Sign Up UI </h1>
                  <p>
                    This project features a user-friendly sign-in and sign-up
                    page UI designed using Figma. It emphasizes a clean and
                    modern layout, ensuring easy navigation and accessibility
                    for users. The design incorporates essential elements such
                    as input fields, call-to-action buttons, and social media
                    sign-in options, that encourages user interaction.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a
                      href="https://www.figma.com/proto/GpmHQsK3nTkFwaKi9IQM1T/sign-up-page?node-id=0-1&t=MyzaTiocBIwSw1ed-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                      target="_blank">
                      View Site
                    </a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={figma} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="p-left">
            <div className="p-img">
              <img src={nike} alt="" />
            </div>
          </div>

          <div className="p-right">
            <div className="p-desc">
              <div className="desc-left">
                <div className="desc-title">
                  <h1>NIKE SHOE UI</h1>
                  <p>
                    The Nike Shoe Page UI project showcases an aesthetically
                    pleasing design created in Figma, focusing on the
                    presentation of Nike footwear. It highlights product images,
                    descriptions, and pricing in a visually appealing manner,
                    enhancing the shopping experience.
                  </p>
                </div>
                <div className="p-btn">
                  <button>
                    <a
                      href="https://www.figma.com/proto/MC3mX6GDgWdyq1NO635pTu/NIKE-SHOES-UI?node-id=2-6&t=jztDYjS22BJcYrsW-0&scaling=contain&content-scaling=fixed&page-id=0%3A1"
                      target="_blank">
                      View Site
                    </a>
                  </button>
                </div>
              </div>

              <div className="desc-right">
                <div className="p-tech">
                  <div className="tech-img">
                    <img src={figma} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
// props validation
Projects.propTypes = {
  textColor: PropTypes.string.isRequired,
}
export default Projects;
