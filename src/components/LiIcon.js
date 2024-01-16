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
        <figure className='absolute left-0 stroke-dark'>
    <svg className="-rotate-90" width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-primary' strokeWidth="3" fill="none" />
        <motion.circle
            cx="75"
            cy="50"
            r="20"
            className='stroke-current fill-light'
            style={{
                pathLength: scrollYProgress,
                strokeWidth: 3 // Justera detta värde efter behov
            }}
        />
        <circle cx="75" cy="50" r="10" className='animate-pulse stroke-current fill-primary' strokeWidth="3" />
    </svg>
</figure>

        </>
    )
}

export default LiIcon