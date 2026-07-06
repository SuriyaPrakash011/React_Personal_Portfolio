import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useThemeMode from '../hooks/useThemeMode'
import Logo from './Logo'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-light
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()
  
  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`
        h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-dark
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </button>
  )
}

export default function NavBar() {
  const [theme, toggleTheme] = useThemeMode()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      
      {/* Hamburger Menu Button */}
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop Menu */}
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav className='flex items-center gap-x-8'>
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
        </nav>

        <nav className='flex items-center justify-center flex-wrap gap-x-6'>
          {/* GitHub Icon */}
          <motion.a href="https://github.com/SuriyaPrakash011" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-full h-auto fill-dark dark:fill-light'>
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 8.8 1.6 12-3.8 12-8.4 0-4.1-.2-15-.3-29.4-62.4 13.5-75.5-30.1-75.5-30.1-10.2-26-24.9-33-24.9-33-20.3-13.9 1.5-13.6 1.5-13.6 22.5 1.6 34.3 23.1 34.3 23.1 20 34.3 52.5 24.4 65.3 18.7 2-14.5 7.8-24.5 14.3-30.1-49.8-5.7-102.2-24.9-102.2-110.8 0-24.4 8.7-44.4 23-60.3-2.3-5.7-10-28.4 2.2-59.5 0 0 18.8-6 61.6 23 17.9-5 37.1-7.5 56.1-7.6 19 .1 38.2 2.6 56.1 7.6 42.8-29 61.6-23 61.6-23 12.2 31.1 4.5 53.8 2.2 59.5 14.3 15.9 23 35.9 23 60.3 0 86.1-52.5 105-102.5 110.6 8 6.9 15.2 20.6 15.2 41.5 0 30-.3 54.1-.3 61.4 0 5.8 3.1 12.6 12.1 10.9C415.9 449.1 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
            </svg>
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a href="https://linkedin.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='w-full h-auto fill-dark dark:fill-light'>
              <path fill="currentColor" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4zM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4z"/>
            </svg>
          </motion.a>

          {/* Email Icon */}
          <motion.a href="mailto:suriyaprakashm003@gmail.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-full h-auto fill-none stroke-dark dark:stroke-light stroke-2'>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </motion.a>

          {/* Theme Mode Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className={`w-6 h-6 flex items-center justify-center rounded-full p-1 ml-3 bg-dark text-light dark:bg-light dark:text-dark`}
            aria-label="theme-switcher"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.16 5.1a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06L6.16 6.16a.75.75 0 010-1.06zM3 11.25a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H3zM6.16 18.9a.75.75 0 000-1.06l-1.59-1.59a.75.75 0 10-1.06 1.06l1.59 1.59a.75.75 0 001.06 0zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.84 18.9a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.06zM21 11.25a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H21zM17.84 5.1a.75.75 0 000 1.06l1.59 1.59a.75.75 0 101.06-1.06L18.9 6.16a.75.75 0 00-1.06 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6c0 4.97 4.03 9 9 9 1.543 0 2.993-.39 4.258-1.074a.75.75 0 011.082.868 10.024 10.024 0 01-18.17 3.346 10.025 10.025 0 01-5.655-9.088c0-5.262 4.053-9.58 9.256-10.007a.75.75 0 01.757.607z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            <CustomMobileLink href="/articles" title="Articles" toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap gap-x-4 mt-8'>
            <motion.a href="https://github.com/SuriyaPrakash011" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 text-light dark:text-dark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-full h-auto fill-current'>
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 8.8 1.6 12-3.8 12-8.4 0-4.1-.2-15-.3-29.4-62.4 13.5-75.5-30.1-75.5-30.1-10.2-26-24.9-33-24.9-33-20.3-13.9 1.5-13.6 1.5-13.6 22.5 1.6 34.3 23.1 34.3 23.1 20 34.3 52.5 24.4 65.3 18.7 2-14.5 7.8-24.5 14.3-30.1-49.8-5.7-102.2-24.9-102.2-110.8 0-24.4 8.7-44.4 23-60.3-2.3-5.7-10-28.4 2.2-59.5 0 0 18.8-6 61.6 23 17.9-5 37.1-7.5 56.1-7.6 19 .1 38.2 2.6 56.1 7.6 42.8-29 61.6-23 61.6-23 12.2 31.1 4.5 53.8 2.2 59.5 14.3 15.9 23 35.9 23 60.3 0 86.1-52.5 105-102.5 110.6 8 6.9 15.2 20.6 15.2 41.5 0 30-.3 54.1-.3 61.4 0 5.8 3.1 12.6 12.1 10.9C415.9 449.1 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
              </svg>
            </motion.a>

            <motion.a href="https://linkedin.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 text-light dark:text-dark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='w-full h-auto fill-current'>
                <path d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4zM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4z"/>
              </svg>
            </motion.a>

            <motion.a href="mailto:suriyaprakashm003@gmail.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 text-light dark:text-dark">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-full h-auto stroke-2'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </motion.a>

            <button 
              onClick={toggleTheme} 
              className={`w-6 h-6 flex items-center justify-center rounded-full p-1 bg-light text-dark dark:bg-dark dark:text-light`}
              aria-label="theme-switcher"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.16 5.1a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06L6.16 6.16a.75.75 0 010-1.06zM3 11.25a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H3zM6.16 18.9a.75.75 0 000-1.06l-1.59-1.59a.75.75 0 10-1.06 1.06l1.59 1.59a.75.75 0 001.06 0zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.84 18.9a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.06zM21 11.25a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H21zM17.84 5.1a.75.75 0 000 1.06l1.59 1.59a.75.75 0 101.06-1.06L18.9 6.16a.75.75 0 00-1.06 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6c0 4.97 4.03 9 9 9 1.543 0 2.993-.39 4.258-1.074a.75.75 0 011.082.868 10.024 10.024 0 01-18.17 3.346 10.025 10.025 0 01-5.655-9.088c0-5.262 4.053-9.58 9.256-10.007a.75.75 0 01.757.607z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Center Logo */}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
