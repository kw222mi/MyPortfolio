import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import profilePic from '../../public/images/profile/profile2.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import Footer from '@/components/Footer'
import HireMe from '@/components/HireMe'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Therese Weidenstedt portfolio" />
     
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen mt-20'>
      <Layout className='pt-0'>
       <div className='flex items-center justify-between w-full'>
        <div className='w-1/2'>
          <Image src={profilePic} alt="Therese Weidenstedt" className=' w-full h-auto'/>
        </div>
        <div className='w-1/2 flex flex-col items-center self-center'>
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
          <p className='my-4 text-base font-medium'>
            Hello there! I'm a passionate full-stack developer on a mission to transform creative ideas into captivating web applications. 
            Whether it's crafting seamless user experiences or diving into the backend magic, I thrive on bringing digital visions to life.

            <br/>
            <br/>
            Take a stroll through my latest projects, where I share my journey and expertise in the world of web 
            development. Specializing in React.js, I love the art of creating dynamic and user-friendly interfaces. 
            <br/>
            <br/>
            Join me as I embark on this exciting coding adventure – where every line of code tells a story. 
            Let's build something extraordinary together!
          </p>
          <div className='flex items-center self-start mt-2'>
            <Link href="dummy.pdf" target={"_blank"} 
            className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-dark border-2 border-solid border-transperant hover:border-dark'
            >Resume <LinkArrow className={'w-6 ml-1'}/></Link>
            <Link href="mailto:therese.weidenstedt@gmail.com" target={"_blank"} 
            className='ml-4 text.lg font-medium capitalize text-dark underline'
            >Contact</Link>
          </div>
        </div>
        </div>
        <div className='mt-10'>
        <Footer />
        </div>
      </Layout>
      <HireMe/>
      </main>
    </>
  )
}
