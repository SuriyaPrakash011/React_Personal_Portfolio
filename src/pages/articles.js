import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import signLangImg from '../../public/images/projects/sign-lang.png'
import resumeClassImg from '../../public/images/projects/resume-class.png'
import loanDocImg from '../../public/images/projects/loan-doc.png'

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block"
      x.set(event.pageX - 120)
      y.set(event.pageY - 120)
    }
  }

  function handleMouseLeave() {
    if (imgRef.current) {
      imgRef.current.style.display = "none"
      x.set(0)
      y.set(0)
    }
  }

  return (
    <Link href={link} target='_blank' 
      onMouseMove={handleMouse} 
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline underline-offset-2 md:text-lg sm:text-base'>{title}</h2>
      <FramerImage 
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef} 
        src={img} 
        alt={title} 
        className='z-10 w-96 h-auto hidden absolute rounded-lg border border-solid border-dark bg-light p-2 shadow-2xl dark:border-light dark:bg-dark md:!hidden'
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li 
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col sm:items-start'
    >
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 sm:pt-2 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      
      {/* Shadow Accent */}
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
      
      <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
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

      <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
        <h2 className='my-2 mt-4 text-2xl font-bold dark:text-light xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 font-medium leading-relaxed'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold text-sm'>{time}</span>
    </li>
  )
}

export default function Articles() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Head>
        <title>Suriya Prakash M | Articles & Contact</title>
        <meta name="description" content="Read Machine Learning and AI articles by Suriya Prakash M, and get in touch via the contact form." />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className='flex-grow w-full flex flex-col items-center justify-center text-dark dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            
            {/* Featured Articles Grid */}
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
              <FeaturedArticle 
                title="Build a Sign Language Interpreter using PyTorch and MediaPipe"
                summary="Learn how to implement a real-time gesture-to-text translator using PyTorch convolutional networks, computer vision via OpenCV, and hand landmarks tracking with Google MediaPipe."
                time="9 min read"
                img={signLangImg}
                link="https://github.com/SuriyaPrakash011"
              />
              <FeaturedArticle 
                title="AI-Powered Resume Screeners: Leveraging NLP for Automated Recruiting"
                summary="Discover the text-preprocessing techniques (TF-IDF vectorization, NLTK tokenization) required to classify resumes into job categories and achieve high accuracy using Scikit-Learn classifiers."
                time="12 min read"
                img={resumeClassImg}
                link="https://github.com/SuriyaPrakash011"
              />
            </ul>

            {/* Other Articles List */}
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <ul className='flex flex-col items-center justify-center relative w-full mb-16'>
              <Article 
                title="Document Validation Systems: OCR and RegEx in Action"
                date="July 2026"
                img={loanDocImg}
                link="https://github.com/SuriyaPrakash011/loan_doc_checker"
              />
              <Article 
                title="A Beginner's Guide to Machine Learning Metrics: Understanding Accuracy, Precision & Recall"
                date="June 2026"
                img={signLangImg}
                link="https://github.com/SuriyaPrakash011"
              />
            </ul>

            {/* Contact Form Section */}
            <div className="w-full pt-16 pb-8 border-t-2 border-solid border-dark dark:border-light mt-32">
              <h2 className='font-bold text-6xl w-full text-center lg:text-5xl md:text-4xl sm:text-3xl mb-8'>Get In Touch</h2>
              <div className="max-w-xl mx-auto p-8 border border-solid border-dark rounded-2xl dark:border-light bg-light dark:bg-dark relative shadow-xl">
                
                {/* Shadow Accent */}
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                
                <form 
                  action="https://formsubmit.co/suriyaprakashm003@gmail.com" 
                  method="POST"
                  className="flex flex-col gap-4 text-dark"
                >
                  {/* FormSubmit Configs */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="flex flex-col">
                    <label className="text-lg font-bold text-dark dark:text-light mb-1" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="px-4 py-2 border border-solid border-dark rounded-lg dark:border-light focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-lg font-bold text-dark dark:text-light mb-1" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      className="px-4 py-2 border border-solid border-dark rounded-lg dark:border-light focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-lg font-bold text-dark dark:text-light mb-1" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      required 
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message..."
                      className="px-4 py-2 border border-solid border-dark rounded-lg dark:border-light focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-dark text-light py-3 px-6 rounded-lg text-lg font-bold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light mt-4 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </Layout>
        </main>
        <Footer />
      </div>
    </>
  )
}
