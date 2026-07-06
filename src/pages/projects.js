import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import signLangImg from '../../public/images/projects/sign-lang.png'
import resumeClassImg from '../../public/images/projects/resume-class.png'
import loanDocImg from '../../public/images/projects/loan-doc.png'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      
      {/* Visual Shadow Background Accent */}
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      
      {/* Project Image */}
      <Link href={github} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto' 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>

      {/* Content details */}
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
        <Link href={github} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light/95 sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center gap-x-4'>
          <Link href={github} target='_blank' className='w-10 text-dark dark:text-light'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-full h-auto fill-current'>
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 8.8 1.6 12-3.8 12-8.4 0-4.1-.2-15-.3-29.4-62.4 13.5-75.5-30.1-75.5-30.1-10.2-26-24.9-33-24.9-33-20.3-13.9 1.5-13.6 1.5-13.6 22.5 1.6 34.3 23.1 34.3 23.1 20 34.3 52.5 24.4 65.3 18.7 2-14.5 7.8-24.5 14.3-30.1-49.8-5.7-102.2-24.9-102.2-110.8 0-24.4 8.7-44.4 23-60.3-2.3-5.7-10-28.4 2.2-59.5 0 0 18.8-6 61.6 23 17.9-5 37.1-7.5 56.1-7.6 19 .1 38.2 2.6 56.1 7.6 42.8-29 61.6-23 61.6-23 12.2 31.1 4.5 53.8 2.2 59.5 14.3 15.9 23 35.9 23 60.3 0 86.1-52.5 105-102.5 110.6 8 6.9 15.2 20.6 15.2 41.5 0 30-.3 54.1-.3 61.4 0 5.8 3.1 12.6 12.1 10.9C415.9 449.1 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
            </svg>
          </Link>
          <Link href={github} target='_blank' className='rounded-lg bg-dark text-light p-2.5 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:px-4 sm:text-base transition duration-300'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      
      {/* Visual Shadow Background Accent */}
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

      {/* Project Image */}
      <Link href={github} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto' 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      {/* Content details */}
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={github} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light/95 text-sm leading-relaxed'>{summary}</p>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={github} target='_blank' className='text-lg font-semibold underline underline-offset-2 md:text-base hover:text-primary dark:hover:text-primaryDark'>
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 text-dark dark:text-light'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-full h-auto fill-current'>
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 8.8 1.6 12-3.8 12-8.4 0-4.1-.2-15-.3-29.4-62.4 13.5-75.5-30.1-75.5-30.1-10.2-26-24.9-33-24.9-33-20.3-13.9 1.5-13.6 1.5-13.6 22.5 1.6 34.3 23.1 34.3 23.1 20 34.3 52.5 24.4 65.3 18.7 2-14.5 7.8-24.5 14.3-30.1-49.8-5.7-102.2-24.9-102.2-110.8 0-24.4 8.7-44.4 23-60.3-2.3-5.7-10-28.4 2.2-59.5 0 0 18.8-6 61.6 23 17.9-5 37.1-7.5 56.1-7.6 19 .1 38.2 2.6 56.1 7.6 42.8-29 61.6-23 61.6-23 12.2 31.1 4.5 53.8 2.2 59.5 14.3 15.9 23 35.9 23 60.3 0 86.1-52.5 105-102.5 110.6 8 6.9 15.2 20.6 15.2 41.5 0 30-.3 54.1-.3 61.4 0 5.8 3.1 12.6 12.1 10.9C415.9 449.1 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Suriya Prakash M | Projects</title>
        <meta name="description" content="Explore machine learning, computer vision, and AI classifiers built by Suriya Prakash M." />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className='flex-grow w-full flex flex-col items-center justify-center text-dark dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Imagination Transcends Knowledge!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              
              {/* Featured Project: Sign Language Interpreter */}
              <div className='col-span-12'>
                <FeaturedProject 
                  type="Featured Project (AI & Computer Vision)"
                  title="Real-Time Sign Language Interpreter"
                  summary="Developed a real-time hand gesture to text & speech translator using OpenCV and MediaPipe. Achieved 95% accuracy across 26 ASL alphabets using PyTorch. Deployed as a browser-based web app using Flask with minimal latency, improving accessibility."
                  img={signLangImg}
                  github="https://github.com/SuriyaPrakash011"
                  link="https://github.com/SuriyaPrakash011"
                />
              </div>

              {/* Project 2: Resume Classifier */}
              <div className='col-span-6 sm:col-span-12'>
                <Project 
                  type="AI & Natural Language Processing"
                  title="AI-Powered Resume Classifier"
                  summary="Screening system classifying resumes into 25+ job categories with 99.4% accuracy. Preprocessed 1,200+ resumes using NLP techniques like TF-IDF and NLTK to extract key features, reducing HR shortlisting times by 80%."
                  img={resumeClassImg}
                  github="https://github.com/SuriyaPrakash011"
                  link="https://github.com/SuriyaPrakash011"
                />
              </div>

              {/* Project 3: Loan Document Checker */}
              <div className='col-span-6 sm:col-span-12'>
                <Project 
                  type="Automated Document Validation System"
                  title="Loan Document Checker"
                  summary="Developed an automated document validation system. Utilizes advanced OCR technology and custom NLP classifiers to extract text from uploads, verify completeness, validate records, and flag compliance anomalies."
                  img={loanDocImg}
                  github="https://github.com/SuriyaPrakash011/loan_doc_checker"
                  link="https://github.com/SuriyaPrakash011/loan_doc_checker"
                />
              </div>

            </div>
          </Layout>
        </main>
        <Footer />
      </div>
    </>
  )
}
