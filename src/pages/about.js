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
import TransitionEffect from '@/components/TransitionEffect'

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
        <meta
          name="Therese Weidenstedt - Portfolio"
          content="Portfolio Therese Weidenstedt"
        />
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Learning: Your Gateway to Endless Growth"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me
              </h2>
              <p className="font-medium">
                <b>Hello! I’m Therese, </b>
                a passionate web developer with a unique background in IT and
                sales. My journey began in 2008 when I studied Marketing
                Communication and IT at Stockholm University, which laid the
                foundation for my skills in JavaScript, HTML, CSS, and SQL.
                Throughout my career, I’ve gained experience in both frontend
                and backend development, with a focus on frontend technologies
                like React.js, TypeScript, and SASS. I’ve also built and managed
                my own e-commerce stores, which sharpened my problem-solving
                skills and ability to work independently. While I’m comfortable
                working across the development stack, my true passion lies in
                creating intuitive, beautiful user interfaces. I thrive in
                collaborative team environments, yet my entrepreneurial
                background makes me equally effective when working
                independently.
                <br />
                <br />
                <b>Beyond Coding: </b>
                With a background as a successful salesperson, store manager,
                and visual merchandiser, I bring a unique blend of business
                acumen and design sensibility to every project.
                <br />
                <br />
                <b>Aesthetic Eye: </b>
                My experience in decor has honed my ability to create visually
                appealing and user-friendly interfaces.
                <br />
                <br />
                <b>Continuous Learner: </b>
                Outside the digital realm, you&apos;ll find me at the gym,
                exploring nature, experimenting in the kitchen, and diving into
                books. I thrive on learning and am always eager to expand my
                skill set. I believe in continuous growth, both personally and
                professionally.
              </p>
              <p className="my-4 font-medium"></p>
              <p className="font-medium"></p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
            dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-5 -right-5 -z-10 w-[103%] h-[101%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Therese Weidenstedt"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vW,
                (max-width: 1200px) 50vW,
                33vw
                "
              ></Image>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50}></AnimatedNumbers>+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40}></AnimatedNumbers>+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3}></AnimatedNumbers>+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Education />
          <Experience />
          <Footer />
        </Layout>
      </main>
    </>
  );
}

export default about