import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'

const about = () => {
  return (
    <>
    
      <title>Portfolio | About Page</title>
      <meta name="Therese Weidenstedt - Portfolio" content='Portfolio Therese Weidenstedt'/>
    
    <main className='flex w-full flex-col items-center justify-center'>
     <Layout className='pt-16'>
        <AnimatedText text="Develop a passion for learning. If you do, you will never cease to grow." className="mb-16"></AnimatedText>
      <div className='grid w-full grid-cols-8 gap-16'>
        <div className='col-span-3 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About me</h2>
          <p className='font-medium'>
            
          </p>
          <p className='my-4 font-medium'>

          </p>
          <p className='font-medium'>

          </p>
        </div>
      </div>
     
     </Layout>
    </main>
    </>
  )
}

export default about