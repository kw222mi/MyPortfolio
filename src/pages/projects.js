import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/pwd.jpg"
import project2 from "../../public/images/projects/pwd.jpg"
import project3 from "../../public/images/projects/pwd.jpg"
import project4 from "../../public/images/projects/pwd.jpg"
import project5 from "../../public/images/projects/pwd.jpg"
import project6 from "../../public/images/projects/pwd.jpg"
import Footer from '@/components/Footer'

const FeaturedProject = ({ type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
        border border-solid border-dark bg-light shadow-2xl p-12'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'></div>
            <Link href={link} target="_blank" 
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto'></Image>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                 <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light 
                 p-2 px-6 text-lg font-semibold'>Visit Project</Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border 
        border-solid border-dark bg-light p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark rounded-br-3xl'></div>
           <Link href={link} target="_blank" 
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto'></Image>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>

                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>

            <div className=' w-full mt-2 flex items-center justify-between'>
                <Link href={link} target="_blank" className='text-lg font-semibold underline'>Visit</Link>
                <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link>
               
            </div>

            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
    <title>Portfolio | Projects Page</title>
      <meta name="Therese Weidenstedt - Portfolio" content='Portfolio Therese Weidenstedt'/>
      </Head>

      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Where Code Meets Creativity: Explore My Work" className='mb-16'/>
            <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-12'>
                    <FeaturedProject 
                    title="PWD Application"
                    img={project1}
                    summary="The Personal Web Desktop (PWD) project. This single-page application (SPA) brings 
                    together a set of interactive sub-applications, creating a dynamic and personalized desktop 
                    experience. This README will provide an overview of the project and its three main 
                    components: Chat, Memory Game, and a custom Weather Application."
                    link="https://github.com/kw222mi/PWD"
                    github="https://github.com/kw222mi/PWD"
                    type="Featured Project"
                    />
                </div>
                 <div className='col-span-6'>
                   <Project 
                    
                    title="Project Applikcation"
                    img={project1}
                    link="/"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                  <div className='col-span-6'>
                    <Project 
                    
                    title="Project Applikcation"
                    img={project1}
                    link="/"
                    github="/"
                    type="Featured Project"
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject 
                    
                    title="Project Applikcation"
                    img={project1}
                    summary="jfiaotnio"
                    link="/"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                 <div className='col-span-6'>
                    <Project 
                    
                    title="Project Applikcation"
                    img={project1}
                    link="/"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                  <div className='col-span-6'>
                    <Project 
                    
                    title="Project Applikcation"
                    img={project1}
                    link="/"
                    github="/"
                    type="Featured Project"
                    />
                </div>
            </div>
            <div className='mt-12'>
            <Footer/>
            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects