import React from 'react'
import { motion } from 'framer-motion'

export default function IdeaBulb() {
  return (
    <motion.div
      className='fixed right-4 bottom-4 md:right-8 md:bottom-8 w-16 h-16 md:w-20 md:h-20 z-10 pointer-events-none opacity-80 dark:opacity-90'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.svg
        viewBox="0 0 100 140"
        className='w-full h-full'
        animate={{ filter: [
          'drop-shadow(0 0 4px rgba(88,230,217,0.35))',
          'drop-shadow(0 0 12px rgba(88,230,217,0.65))',
          'drop-shadow(0 0 4px rgba(88,230,217,0.35))'
        ] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Bulb glass outline */}
        <path
          d="M50 8 C25 8 10 26 10 48 C10 65 20 75 28 84 C33 90 34 96 34 102 L66 102 C66 96 67 90 72 84 C80 75 90 65 90 48 C90 26 75 8 50 8 Z"
          fill="none"
          className='stroke-dark dark:stroke-light'
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Filament */}
        <path
          d="M40 60 L40 45 C40 40 45 38 47 42 L53 54 C55 58 60 56 60 51 L60 38"
          fill="none"
          className='stroke-primary dark:stroke-primaryDark'
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Little shine lines */}
        <line x1="18" y1="30" x2="24" y2="24" className='stroke-dark dark:stroke-light' strokeWidth="3" strokeLinecap="round" />
        <line x1="14" y1="42" x2="21" y2="40" className='stroke-dark dark:stroke-light' strokeWidth="3" strokeLinecap="round" />

        {/* Screw base */}
        <rect x="34" y="102" width="32" height="6" rx="1.5" className='fill-dark dark:fill-light' />
        <rect x="36" y="110" width="28" height="6" rx="1.5" className='fill-dark dark:fill-light' />
        <rect x="38" y="118" width="24" height="6" rx="1.5" className='fill-dark dark:fill-light' />
        <rect x="40" y="126" width="20" height="10" rx="3" className='fill-primary dark:fill-primaryDark' />
      </motion.svg>
    </motion.div>
  )
}
