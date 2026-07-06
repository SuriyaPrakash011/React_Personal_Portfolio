import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import profilePic from '../../public/images/profile/developer-pic-1.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Suriya Prakash M | AI & ML Engineer Portfolio</title>
        <meta name="description" content="Explore Suriya Prakash M's portfolio, showcasing machine learning systems, computer vision models, and full-stack AI integrations." />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className='flex-grow flex items-center text-dark dark:text-light sm:items-start'>
          <Layout className='!pt-0 md:!pt-16 sm:!pt-16'>
            <div className='flex w-full items-start justify-between md:flex-col'>
              
              {/* Left Column: Profile Image */}
              <div className='w-1/2 lg:hidden md:inline-block md:w-full flex justify-center items-center pr-12 lg:pr-0'>
                <div className='relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-solid border-dark dark:border-light bg-dark/5 dark:bg-light/5'>
                  <Image 
                    src={profilePic} 
                    alt="Suriya Prakash M" 
                    className='w-full h-full object-cover object-top'
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Column: Hero Content */}
              <div className='flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center pl-12 lg:pl-0'>
                <AnimatedText 
                  text="Turning vision into reality with AI and code." 
                  className='!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
                />
                
                <p className='my-4 text-base font-medium md:text-sm sm:!text-xs leading-relaxed'>
                  As a passionate Computer Science student specializing in AI & Machine Learning, I am dedicated to building intelligent solutions that solve complex, real-world problems. Explore my latest projects, certifications, and technical expertise in Deep Learning, NLP, and Computer Vision.
                </p>

                <div className='mt-2 flex items-center self-start lg:self-center gap-x-4'>
                  <Link 
                    href="/dummy.pdf" 
                    target="_blank" 
                    className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base transition duration-300"
                    download
                  >
                    Resume 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-auto ml-1 !w-6 md:!w-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </Link>
                  <Link 
                    href="mailto:suriyaprakashm003@gmail.com" 
                    className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base hover:text-primary dark:hover:text-primaryDark"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          
          {/* Spinning Hire Me Badge */}
          <HireMe />
        </main>
        <Footer />
      </div>
    </>
  )
}
