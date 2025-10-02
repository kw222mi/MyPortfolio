import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import profilePic from "../../public/images/profile/profile2.png";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio -Therese Weidenstedt</title>
        <meta name="description" content="Therese Weidenstedt portfolio" />
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex items-center text-dark w-full min-h-screen mt-20 dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-1/2">
              <Image
                src={profilePic}
                alt="Therese Weidenstedt"
                className=" w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vW,
                (max-width: 1200px) 50vW,
                50vw 
                "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I’m Therese, a web developer who thrives on combining creativity
                and technology. With a background in IT, sales,
                entrepreneurship, and visual merchandising, I bring both
                technical expertise and a strong understanding of how people
                think, choose, and act. I specialize in frontend development
                with React, JavaScript, and modern web technologies, but also
                have experience working fullstack. What drives me is creating
                solutions that feel intuitive, engaging, and meaningful. Curious
                and collaborative by nature, I love exploring new tools and
                ideas — and believe the best results come when technology,
                design, and people meet.
                <br />
                <br />
                Take a stroll through my latest projects, where I share my
                journey and expertise in the world of web development.
                
                <br />
                <br />
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-dark border-2 border-solid border-transperant hover:border-dark dark:bg-light dark:text-dark
            hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:kw222mi@student.lnu.se"
                  target={"_blank"}
                  className="ml-4 text.lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
