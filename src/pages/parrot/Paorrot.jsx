import React from 'react'
import ParrotNav from '../../components/ParrotNav/ParrotNav'
import ParrotLanding from '../../components/ParrotNav/ParrotLanding'
import ParrotIcons from '../../components/ParrotIcons/ParrotIcons'
import Features from '../../components/features/Features'
import ViewCard from '../../components/parrotViewCard/ViewCard'

export default function Paorrot() {
  return (
    <div className='bg-image space-y-5' >
      <ParrotNav/>
      <ParrotLanding/>
      <ParrotIcons/>
      <Features/>
      <ViewCard/>
    </div>
  )
}
