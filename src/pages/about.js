import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// Skill Badge Component
const SkillBadge = ({ name, x, y }) => {
  return (
    <motion.div 
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

// Timeline Entry Component
const TimelineItem = ({ title, place, time, description, grade }) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
      {/* Bullet Dot */}
      <div className="absolute left-[50%] -translate-x-[50%] w-4 h-4 bg-primary dark:bg-primaryDark rounded-full border-4 border-solid border-light dark:border-dark shadow-sm"></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {title} &nbsp;<span className='text-primary dark:text-primaryDark'>@{place}</span>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time}
        </span>
        <p className='font-medium w-full md:text-sm mt-2'>
          {description}
        </p>
        {grade && (
          <span className='inline-block mt-1 font-semibold text-primary dark:text-primaryDark text-sm'>
            {grade}
          </span>
        )}
      </motion.div>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Suriya Prakash M | About Me</title>
        <meta name="description" content="Read about Suriya Prakash M, a specialized AI & Machine Learning student, with details on skills, education, and credentials." />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className='flex-grow flex w-full flex-col items-center justify-center text-dark dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            
            {/* Bio & Stats Grid */}
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
              
              {/* Bio Section */}
              <div className='col-span-5 flex flex-col items-start justify-start lg:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                <p className='font-medium leading-relaxed mb-4'>
                  I am a final year Computer Science Engineering student specializing in AI & Machine Learning at Sethu Institute of Technology. I have hands-on experience in building, training, and assessing machine learning and deep learning models for real-world applications.
                </p>
                <p className='font-medium leading-relaxed mb-4'>
                  My expertise spans Natural Language Processing (NLP) and Computer Vision, where I enjoy solving complex problems using data-driven approaches. I am passionate about engineering clean architectures and combining advanced algorithms with frontend interfaces.
                </p>
                <p className='font-medium leading-relaxed'>
                  Whether it is training custom neural nets, automating document verification, or crafting interactive web applications, I bring technical rigor and a commitment to excellence to every codebase I touch. Eager to grow as a Machine Learning Engineer.
                </p>
              </div>

              {/* Stats Section */}
              <div className='col-span-3 flex flex-col items-end justify-between lg:col-span-8 lg:flex-row lg:items-center'>
                
                {/* Stat 1 */}
                <div className='flex flex-col items-end justify-center lg:items-center my-4'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    7.48
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                    BE CGPA
                  </h2>
                </div>

                {/* Stat 2 */}
                <div className='flex flex-col items-end justify-center lg:items-center my-4'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    5+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                    ML & AI Projects
                  </h2>
                </div>

                {/* Stat 3 */}
                <div className='flex flex-col items-end justify-center lg:items-center my-4'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    10+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                    Certifications
                  </h2>
                </div>

              </div>

            </div>

            {/* Skills Section */}
            <div className='w-full py-24'>
              <h2 className='font-bold text-8xl mt-16 w-full text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>Skills</h2>
              
              {/* Circular Skills Map */}
              <div className='w-full h-[60vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[50vh] sm:h-[40vh] xs:h-[30vh] mt-8 bg-[radial-gradient(rgba(0,0,0,0.15)_2px,transparent_2px)] dark:bg-[radial-gradient(rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[size:24px_24px]'>
                <motion.div 
                  className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                  whileHover={{ scale: 1.05 }}
                >
                  AI / ML
                </motion.div>
                
                {/* Core Skills Badges */}
                <SkillBadge name="Python" x="-20vw" y="2vw" />
                <SkillBadge name="PyTorch" x="-6vw" y="-10vw" />
                <SkillBadge name="NLTK & NLP" x="18vw" y="-6vw" />
                <SkillBadge name="OpenCV & CV" x="22vw" y="6vw" />
                <SkillBadge name="Scikit-Learn" x="0vw" y="12vw" />
                <SkillBadge name="MediaPipe" x="-18vw" y="-12vw" />
                <SkillBadge name="Next.js" x="6vw" y="-18vw" />
                <SkillBadge name="React.js" x="-6vw" y="18vw" />
                <SkillBadge name="Tailwind CSS" x="-28vw" y="10vw" />
                <SkillBadge name="SQL" x="10vw" y="10vw" />
                <SkillBadge name="MongoDB" x="28vw" y="-12vw" />
                <SkillBadge name="Git & GitHub" x="-10vw" y="-20vw" />
              </div>
            </div>

            {/* Qualifications / Timeline Section */}
            <div className='w-full py-24'>
              <h2 className='font-bold text-8xl w-full text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl mb-16'>Education</h2>
              
              {/* Timeline Container */}
              <div className='relative w-[75%] mx-auto md:w-full'>
                {/* Vertical Center Line */}
                <div className="absolute left-[50%] -translate-x-[50%] top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"></div>
                
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                  <TimelineItem 
                    title="B.E. in Computer Science Engineering (AI & ML)"
                    place="Sethu Institute of Technology"
                    time="2022 – 2026"
                    description="Specializing in artificial intelligence, neural networks, deep learning, computer vision, and NLP. Developed core engineering skills alongside practical implementation of data-driven projects."
                    grade="CGPA: 7.483 / 10"
                  />
                  <TimelineItem 
                    title="Higher Secondary School (HSC)"
                    place="CEOA Higher Secondary School"
                    time="2020 – 2022"
                    description="Focused on Mathematics, Physics, Chemistry, and Computer Science. Laid the technical foundation for computer engineering studies."
                    grade="Score: 75%"
                  />
                  <TimelineItem 
                    title="Secondary School Certificate (SSLC)"
                    place="Sarva Seva Matriculation School"
                    time="2020"
                    description="Completed general secondary education with strong performance in mathematics and sciences."
                    grade="Score: 75%"
                  />
                </ul>
              </div>
            </div>

            {/* Certifications Timeline Section */}
            <div className='w-full py-24'>
              <h2 className='font-bold text-8xl w-full text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl mb-16'>Credentials</h2>
              
              {/* Timeline Container */}
              <div className='relative w-[75%] mx-auto md:w-full'>
                {/* Vertical Center Line */}
                <div className="absolute left-[50%] -translate-x-[50%] top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"></div>
                
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                  <TimelineItem 
                    title="AI with Python"
                    place="Infosys SpringBoard"
                    time="Intermediate Level"
                    description="Completed structured training in data science, predictive modeling, and AI algorithms using Python."
                  />
                  <TimelineItem 
                    title="Data Analysis with Python"
                    place="IBM Cognitive AI"
                    time="Professional Certificate"
                    description="Mastered Python libraries like Pandas, NumPy, and Scikit-Learn for importing, cleaning, analyzing, and visualizing data."
                  />
                  <TimelineItem 
                    title="Robotics and Automation"
                    place="Zetspire Technologies"
                    time="Hands-on Certification"
                    description="Trained in sensor integration, automation control, and robotics systems programming."
                  />
                  <TimelineItem 
                    title="Git Training"
                    place="Simplilearn"
                    time="Git Version Control"
                    description="Learned source code management, branching, merging, pull requests, and collaborative repository workflows."
                  />
                  <TimelineItem 
                    title="BYTZTROM'25 Hackathon"
                    place="Best Performer Award"
                    time="Competitor Achievement"
                    description="Recognized for outstanding contribution and execution under tight time limits during the collegiate hackathon."
                  />
                  <TimelineItem 
                    title="TECHBIZ'25 Symposium"
                    place="1st Prize - Code Beat"
                    time="Competitor Achievement"
                    description="Awarded first prize in the national-level competitive coding and algorithm event."
                  />
                </ul>
              </div>
            </div>

          </Layout>
        </main>
        <Footer />
      </div>
    </>
  )
}
