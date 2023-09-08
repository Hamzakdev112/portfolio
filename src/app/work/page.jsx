'use client'

import React from 'react'
import Section1 from '../components/work/Section1'
import Section2 from '../components/work/Section2'
import Section3 from '../components/work/Section3'
import Section4 from '../components/work/Section4'
import Section5 from '../components/work/Section5'

const page = () => {
  return (
    <div className='work'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default page
