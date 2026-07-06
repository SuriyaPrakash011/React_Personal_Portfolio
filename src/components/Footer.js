import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <div className='py-8 px-32 flex items-center justify-between lg:flex-col lg:py-6 lg:px-16 md:px-12 sm:px-8'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
          Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&hearts;</span> by&nbsp;
          <a href='https://github.com/SuriyaPrakash011' target="_blank" rel="noopener noreferrer" className='underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark'>Suriya Prakash</a>
        </div>
        <a href='mailto:suriyaprakashm003@gmail.com' className='underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark'>Say Hello</a>
      </div>
    </footer>
  )
}
