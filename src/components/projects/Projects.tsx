import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const RoamGram = `During the summer of 2024, a friend and I completed the CP2106 (Orbital) module by developing a full-stack travel website. You can access the deployment version on my GitHub repository: roamgram-deploy.
The site includes a travel-plan creator with CRUD functions, an expenditure tracker, a detailed reviews page with a rich-text editor and image upload, location routing using Google's API, and a calendar with full CRUD functionalities, featuring draggable and resizable events. 
I was in charge of the front-end development, using HTML, CSS with Tailwind, React TypeScript with Vite, and libraries such as Mantine UI and TanStack Query for data caching.

Key lessons from front-end development:
- UI design and framer-motion: Using of Mantine UI library which is headless and TailWind CSS + Framer-motion for dynamic animations. Applied to create a this personal website.
- Backend integration and State management: Utilized React hooks like useState, useEffect, and useRef & self-made hooks to manage the state of multiple objects, ensuring proper data rendering and display upon fetching from the backend.
- Data caching: Leveraged TanStack Query to mitigate slow queries by accessing data from the cache, reducing the need for repeated data fetching.
- Googles Map API: Learnt how to implement this API which was able to display the google maps, specific routes/directions, and to utilize navigator.geolocation to get the current location
- Amazon S3 image upload: Used pre-signed URLS to upload image and fetch back the response from backend to display images in a rich-text-editor and subsequently the reviews posted. 
- GitHub

You can access it here: https://github.com/Shiraishie/roamgram-deploy.

Many thanks to Kim Seung Hyun for making this project possible :) 
You can find him here: https://github.com/kimseunghyun-kr`;

const Alzheimers = `This project was completed as part of my CS3244 module. The Alzheimer's dataset was downloaded from Kaggle, and I used Google Collab along with GitHub for sharing of code. The libraries used were TensorFlow Keras and Scikit-Learn. My responsibilities included data preprocessing, feature engineering, model training, and result analysis. I approached the problem in two stages: detection and classification.

For detection and classification, I employed linear models such as SVM (or multi-class SVM) with various kernels(to investigate the effects of the kernels) and a CNN model. To reduce dimensionality, LDA was applied to the training sets. The CNN model was designed by me, consisting of two 2D CNN layers, batch normalization, max pooling, and dropout layers to prevent overfitting.

Evaluation metrics included AUC-ROC scores and macro-recall for classification, as well as accuracy and recall for detection (isDemented vs. nonDemented classes). The results indicated that while the detection model performed adequately, the classification of Alzheimer's severity was suboptimal. This may be attributed to factors such as insufficient data or the inherent difficulty of using brain muscle atrophy to gauge Alzheimer's severity.

Image preprocessing involved using histogram equalization (CLAHE) to enhance contrast, as some images were relatively dark and pixel information is crucial. However, this step may have introduced noise or caused a loss of detail, potentially contributing to the poor performance of the CNN model.
Binary filteres were also included to see if white matter had significant importance in detecting and classifying Alzheimers.`;

const DSA2101 = `As part of a group project for DSA2101, my team decided to investigate the global rate of forest loss using a dataset from TidyTuesday. 
We were required to utilize the tidyverse package, including ggplot2, for data cleaning and visualization in R. For my contribution, I performed data cleaning using tidyverse and created an interactive choropleth map using the plotly package.`;

export default function Projects() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
  });

  return (
    <>
      <motion.div ref={element}>
        <div className="proj-container md:mr-10 w-screen">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            // animate={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="proj-item flex flex-col justify-center items-center md:flex-row md:pl-32 md:pr-32 border-b mb-5 pb-5 gap-x-5">
              <div className="w-screen md:w-full">
                <h1 className="md:mb-6 pl-3 pr-3">
                  RoamGram: An all-in-One Travel Website
                </h1>
                <img
                  className="rounded-xl"
                  src="https://i.imgur.com/7qZgP2k.gif"
                />
              </div>
              <h3 className="ml-5 mr-4 mt-5 md:-ml-10 whitespace-pre-wrap">
                {RoamGram}
              </h3>
            </div>
          </motion.div>
        </div>
        {/* <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            // animate={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="proj-item flex flex-col justify-center items-center md:flex-col md:pl-32 md:pr-32 md:border-b mb-5 pb-5">
              <h1 className="pl-3 pr-3">
                Alzheimers Detection with Machine Learning
              </h1>
              <img
                className="rounded-xl"
                src="https://i.imgur.com/fPRC16S.png"
              />
              <h3 className="ml-5 mr-4 mt-5 md:ml-14 whitespace-pre-wrap">
                {Alzheimers}
              </h3>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            // animate={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="proj-item flex flex-col justify-center items-center md:flex-row-reverse md:pl-32 md:pr-32">
              <div className="md:w-9/12">
                <h1 className="pl-3 pr-3">
                  Data Viz for Brazil's Deforestation
                </h1>
                <img
                  className="rounded-xl w-10/12"
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjd3dzRucjRnZ3JpNXh5bDlna3l1bmMyc3czYWxoaTJhbGVtOWg0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tQiRp46qmxyaGFV9BM/giphy.gif"
                />
              </div>
              <h3 className="ml-5 mr-4 mt-5 whitespace-pre-wrap md:pl-10 md:text-right">
                {DSA2101}
              </h3>
            </div>
          </motion.div>
        </div> */}
      </motion.div>
    </>
  );
}
