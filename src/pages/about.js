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
                I’m a web developer passionate about combining technology and
                creativity to build intuitive, user-friendly solutions. My main
                focus is frontend development, working with React, TypeScript,
                and modern web technologies — but I also bring fullstack
                experience that allows me to see the bigger picture.
                <br />
                <br />
                Alongside my technical background, I’ve run my own e-commerce
                stores and worked as a salesperson, store manager, and visual
                merchandiser. This blend of business insight and design
                sensibility gives me a unique edge: I understand not just how to
                build products, but how they’re experienced, marketed, and sold.
                <br />
                <br />
                I thrive in collaborative team environments but am equally
                comfortable driving projects independently. What motivates me
                most is solving problems, experimenting with new tools, and
                creating digital experiences that feel both functional and
                visually engaging.
                <br />
                <br />
                Outside of work, I’m a lifelong learner — curious, structured,
                and always seeking growth. Whether coding, exploring nature, or
                discovering new ideas, I bring the same mindset: learn, improve,
                and create.
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

            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 
            xs:hidden sm:hidden md:hidden lg:hidden lx:hidden 2xl:hidden"
            >
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