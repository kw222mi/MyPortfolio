import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return ( 
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
        <LiIcon reference ={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className="text-8xl font-bold mb-32 w-full text-center">
                Education
            </h2>

            <div ref={ref} className ='w-[75%] mx-auto relative'>

    
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='w-[4px] h-full bg-dark origin-top top-0 left-9 absolute'/>
            
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                    
                    type='Software Engineer' 
                    time='2022-Present' place='Mountain View, CA'
                    info='Worked on a team responsible for developing new features for Googles 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization.'
                    
                    />

                    <Details 
                    
                    type='Software Engineer' 
                    time='2022-Present' place='Mountain View, CA'
                    info='Worked on a team responsible for developing new features for Googles 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization.'
                    
                    />

                    <Details 
                    
                    type='Software Engineer' 
                    time='2022-Present' place='Mountain View, CA'
                    info='Worked on a team responsible for developing new features for Googles 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization.'
                    
                    />

                    
                </ul>

            </div>
        </div>
    )
      
 
    
}

export default Education