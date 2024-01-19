import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile-front.png"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Head from 'next/head'
import Footer from '@/components/Footer'

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once: true});

useEffect(() => {
  if(isInView){
    motionValue.set(value);

  }

}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])

return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
      <title>Portfolio | About Page</title>
      <meta name="Therese Weidenstedt - Portfolio" content='Portfolio Therese Weidenstedt'/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
     <Layout className='pt-16'>
        <AnimatedText text="Learning: Your Gateway to Endless Growth" className="mb-16"></AnimatedText>
      <div className='grid w-full grid-cols-8 gap-16'>
        <div className='col-span-3 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About me</h2>
          <p className='font-medium'>
           
<b>Tech Mastery: </b>
 Proficient in JavaScript, with a focus on React.js, I wield the power of Express.js, 
Node.js, and MongoDB in the backend. From crafting stylish user interfaces with HTML, CSS, and Tailwind 
to securing APIs with JWT, my technical toolkit is robust and versatile.
<br/>
<br/>
<b>Proven Performance: </b> Despite being a recent graduate from Linné University, my portfolio boasts impactful 
projects showcasing my knack for problem-solving and collaborative teamwork.
<br/>
<br/>
<b>Beyond Coding: </b>
 With a background as a successful salesperson, store manager, and visual merchandiser, I bring a unique 
blend of business acumen and design sensibility to every project.
<br/>
<br/>
<b>Aesthetic Eye: </b>
My experience in decor has honed my ability to create visually appealing and user-friendly interfaces.
<br/>
<br/>
<b>Continuous Learner: </b>
 Outside the digital realm, you'll find me at the gym, exploring nature, experimenting 
in the kitchen, and diving into books. I thrive on learning and am always eager to expand my skill set.

          </p>
          <p className='my-4 font-medium'>

          </p>
          <p className='font-medium'>

          </p>
        </div>

        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
          <div className='absolute top-5 -right-5 -z-10 w-[103%] h-[101%] rounded-[2rem] bg-dark' />
          <Image src={profilePic} alt="Therese Weidenstedt" className='w-full h-auto rounded-2xl'></Image>
        </div>

        <div className='col-span-2 flex flex-col items-end justify-between'>
          <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={50}></AnimatedNumbers>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
          </div>

          <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={40}></AnimatedNumbers>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
          </div>

          <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={3}></AnimatedNumbers>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
          </div>
        </div>

      </div>
     
     <Skills />
     <Education />
     <Experience/>
      <Footer/>
     </Layout>
    </main>
    </>
  )
}

export default about