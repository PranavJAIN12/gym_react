import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
    </div>
  )
}
