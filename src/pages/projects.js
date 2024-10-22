import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/memory-app2.jpg"
import project2 from "../../public/images/projects/sokoban.png"
import project3 from "../../public/images/projects/crud.png"
import project4 from "../../public/images/projects/pwd.jpg"
import project5 from "../../public/images/projects/pwd.jpg"
import project6 from "../../public/images/projects/pwd.jpg"
import Footer from '@/components/Footer'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
        border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12 dark:border-light 
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      ></div>
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vW,
                (max-width: 1200px) 50vW,
                50vw
                "
          />
        </Link>
      ) : (
        <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vW,
                (max-width: 1200px) 50vW,
                50vw
                "
          />
        </div>
      )}

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        )}
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light 
                 p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};


const Project = ({title, type, img, link, github}) => {

    return (
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl border 
        border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4"
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark rounded-br-3xl dark:bg-light
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vW,
                (max-width: 1200px) 50vW,
                50vw
                "
          ></Image>
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>

          <div className=" w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta
          name="Therese Weidenstedt - Portfolio"
          content="Portfolio Therese Weidenstedt"
        />
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Curious What I've Done?"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Sokoban"
                img={project2}
                summary="Classic sokoban game. A school group project where the task was to create a sokoban pussle game. 
                The objective of Sokoban is to push all the boxes onto the storage locations. Once all the boxes are 
                correctly placed, the level is completed, and the player can progress to the next challenge."
                link="https://sokoban-dfmc796ig-kw222mis-projects.vercel.app/"
                github="https://github.com/kw222mi/sokoban"
                type="React, TypeScript, CSS"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="PWD Application"
                img={project1}
                summary="The Personal Web Desktop (PWD) project. This single-page application (SPA) brings 
                    together a set of interactive sub-applications, creating a dynamic and personalized desktop 
                    experience.  The application is composed of three main components: a Chat feature, a 
                    Memory Game, and a custom Weather Application."
                github="https://github.com/kw222mi/PWD"
                type="JavaScript, Webcomponents, Web Socket, API"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Snippet Application"
                img={project3}
                summary="This is a straightforward CRUD application designed for storing and organizing code snippets. 
                Users can save their own code snippets for personal reference or browse through code shared by others 
                for inspiration. The platform supports basic create, read, update, and delete functionality, making it 
                easy to manage a collection of useful coding examples and ideas. "
                github="https://github.com/kw222mi/CRUD"
                type="JavaScript, Node.js, Express, Bootstrap, MongoDB"
              />
            </div>
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects