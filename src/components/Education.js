import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="text-8xl font-bold mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-[4px] h-full bg-dark origin-top top-0 left-9 absolute"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Frontend developer"
            time="2023-Present"
            place="Lexicon IT Proffs"
            info="HTML, CSS: Semantic HTML, CSS Syntax, version control Git, responsiveness, Tailwind
                    Agile project methods: Github, SCRUM, agile web development
                    JavaScript: ECMAScript, Deployment of web pages, Code structure, External services
                    React: SPA development, SASS, React JS, State Management, Routing"
          />

          <Details
            type="Webbprogrammering"
            time="2021-2023"
            place="Linneuniversitetet"
            info="Development of web applications for various platforms, primarily in Javascript, both 
                    frontend and backend. Also courses in testing, security, and code quality.
                    IT skills: HTML, CSS, JavaScript, Docker, MongoDB, GitLab, UML, API, Express, Node.js, 
                    Scrum, Kanban, IOT, Java"
          />

          <Details
            type="Visual Merchandise"
            time="2018"
            place="Folkuniversitetet"
            info="The course focused on developing the ability to create inspiring and sales-driven 
            retail environments and concept designs, with special consideration for brand conditions and trends. 
            The course covered topics such as modern retail, consumer behaviors and trends, visual merchandising 
            (including window displays and product presentation), and concept design for the entire store experience. 
            I have also acquired knowledge in color theory, material selection, and lighting techniques
            IT Skills: SketchUp"
          />

          <Details
            type="Marketing communication and IT"
            time="2008-2011"
            place="Stockholms universitet/KTH"
            info="Courses in marketing, consumer behavior, market analysis, strategic communication, 
                    branding and business strategy, project management, interaction design, databases, Java programming, 
                    analysis and modeling.
                    IT Skills: HTML, CSS, Java, UML, MySQL, interaction design"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
