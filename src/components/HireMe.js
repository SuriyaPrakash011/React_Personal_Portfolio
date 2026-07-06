import React from 'react'
import Link from 'next/link'

export default function HireMe() {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute z-20'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        {/* Spinning Circular Text */}
        <svg viewBox="0 0 100 100" className="w-full h-auto fill-dark dark:fill-light animate-spin-slow">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text>
            <textPath href="#circlePath" startOffset="0%" className="fill-dark dark:fill-light text-[8.5px] font-bold tracking-widest">
              ML Engineer • AI Developer • Freelancer •
            </textPath>
          </text>
        </svg>

        {/* Central Button */}
        <Link 
          href="mailto:suriyaprakashm003@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid bg-dark text-light rounded-full w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25 md:w-12 md:h-12 md:text-[8px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}
