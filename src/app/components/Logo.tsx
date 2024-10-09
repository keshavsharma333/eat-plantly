'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { view } from '@/utils/animations'

interface LogoProps {
  fillWhite: boolean
}

const Logo = (props: LogoProps) => {
  const { fillWhite } = props

  return (
    <motion.div
    variants={view}
    initial='initial'
    whileInView='animate'
    className='w-[150px] md:w-60 lg:w-[220px] mt-4 mx-auto flex-shrink-0'>
    <Link href='/'>
      <span className='sr-only'>Logo</span>
      <svg
        width='1346'
        height='472'
        viewBox='0 0 1346 472'
        className='w-full h-full'
        xmlns='http://www.w3.org/2000/svg'>
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          className={`${
            fillWhite ? 'fill-[var(--white)]' : 'fill-[var(--black)]'
          }`}
          style={{
            fontSize: '250px', // Adjust font size for better fit
            fontFamily: 'Great Vibes, cursive',  // Replace with your font
            fontWeight: 'bold',
          }}>
         Plantly
        </text>
      </svg>
    </Link>
  </motion.div>
  
  )
}

export default Logo
