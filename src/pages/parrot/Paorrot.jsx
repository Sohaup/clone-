import React from 'react'
import ParrotNav from '../../components/ParrotNav/ParrotNav'
import ParrotLanding from '../../components/ParrotNav/ParrotLanding'
import ParrotIcons from '../../components/ParrotIcons/ParrotIcons'
import Features from '../../components/features/Features'

export default function Paorrot() {
  return (
    <div className='bg-image' >
      <ParrotNav/>
      <ParrotLanding/>
      <ParrotIcons/>
      <Features/>
    </div>
  )
}
