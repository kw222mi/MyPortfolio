import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return (
         <motion.div className='flex items-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark 
         cursor-pointer absolute '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
           animate={{ x: parseFloat(x), y: parseFloat(y) }}
            transition={{duration:1.5}}
            >
                {name}
            </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

           
            <Skill name="HTML" x={-200} y={20} />
            <Skill name="CSS" x={-50} y={-100} />
            <Skill name="Javascript" x={200} y={60} />
            <Skill name="Express" x={0} y={120} />
            <Skill name="Tailwind CSS" x={-200} y={-150} />
            <Skill name="MongoDB" x={150} y={-120} />
            <Skill name="React" x={320} y={-50} />
            <Skill name="Firebase" x={0} y={-200} />
            <Skill name="NodeJS" x={-250} y={180} />
        </div>
        </>
    )
}

export default Skills