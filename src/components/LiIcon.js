import React from 'react'
import {motion, useScroll} from "framer-motion"

const LiIcon = ({reference}) => {

      const {scrollYProgress} = useScroll(
        {
            target:reference,
            offset:["center end", "center center"]
        }
    )
    return (
      <>
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
          <svg
            className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle
              cx="75"
              cy="50"
              r="20"
              className="stroke-primary dark:stroke-primaryDark"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx="75"
              cy="50"
              r="20"
              className="stroke-current fill-light dark:fill-dark"
              style={{
                pathLength: scrollYProgress,
                strokeWidth: 3, // Justera detta värde efter behov
              }}
            />
            <circle
              cx="75"
              cy="50"
              r="10"
              className="animate-pulse stroke-current fill-primary dark:fill-primaryDark"
              strokeWidth="3"
            />
          </svg>
        </figure>
      </>
    );
}

export default LiIcon