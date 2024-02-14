import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="text-8xl font-bold mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-[4px] h-full bg-dark origin-top top-0 left-9 absolute"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Visual Merchandiser"
            company="KappAhl"
            companyLink=""
            time="2019-2021"
            address="Sollentuna"
            work="Responsible for the store's appearance and product display. Planning 
              and implementation of campaigns according to KappAhl's concept and the store's 
              conditions."
          />

          <Details
            position="Administrator  orderflow"
            company="Bauhaus"
            companyLink=""
            time="2018-2019"
            address="Bauhaus webshop"
            work="Handled customer inquiries regarding complaints, incorrect deliveries, 
              delivery delays, transport damages, as well as questions regarding returns and products."
          />

          <Details
            position="Salesperson"
            company="KappAhl"
            companyLink=""
            time="2017-2018"
            address="Bromma"
            work="Salesperson, cashier, organize, unpack and tagging clothes, visual merchandising, and receiving goods.
            In the store, you have your own department to take care of where you restock clothes and rearrange to ensure 
            everything fits and looks neat."
          />

          <Details
            position="Store manager and visual merchandiser"
            company="Vero Moda/Bestseller"
            companyLink=""
            time="2016-2017"
            address="Bromma"
            work="Responsible for sales, budget, staffing, personnel, and daily operations. 
              The position also included responsibility for visual merchandising in the store."
          />

          <Details
            position="Salesperson"
            company="Reima"
            companyLink=""
            time="2015-2016"
            address="Mall of Scandinavia"
            work="Worked on a team responsible for developing new features for Googles 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
          />

          <Details
            position="Responsible for online store"
            company="Sportscam"
            companyLink=""
            time="2011-2015"
            address=""
            work="Started working there during my studies and gradually took on a larger part of the 
            responsibility for the business. I handled all marketing and web administration, as well as 
            sales and purchasing, and the company's ongoing bookkeeping."
          />

          <Details
            position="Salesperson and store manager"
            company="Pressbyrån"
            companyLink=""
            time="1996-2013"
            address=""
            work="Ran own franchise store (2003 - 2006) with responsibility for finance, sales, personnel, procurement, 
            and marketing. I had personnel responsibility for around 10 employees in a business with a turnover 
            between 10 and 15 million. Both stores were operating at a loss when I took over, and in both cases, 
            I managed to increase both sales and customer numbers, turning the business profitable. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
