import { motion } from "framer-motion";
import "./Home.css";
export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="intro-container justify-center items-center h-auto">
          <div className="photo">
            <img
              className="profile rounded-3xl"
              src="https://i.imgur.com/GD71j9x.jpg"
            ></img>
          </div>
          <div className="intro flex-col max-w-lg">
            <h1 className="">Hi!</h1>
            <p>
              I'm Alexandra, a third-year NUS student pursuing a major in Data
              Science & Analytics with a minor in Bioinformatics. I am
              interested in studying Machine Learning in-depth and applying it
              to practical purposes, particularly in the healthcare industry.
              You can take a look at my Projects!
            </p>
            <br></br>
            <p>
              Skills that I have picked up:
              <p>
                - Basic implementation of Machine Learning using TensorFlows
              </p>
              <p>- SQL queries</p>
              <p>
                - Simple data visualization using Tableau, Matplotlib, and
                Tidyverse in R
              </p>
              <p> - Front-End Dev</p>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
