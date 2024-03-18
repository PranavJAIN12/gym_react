import React, { useState } from 'react'
import './SearchExercise.css'


export default function SearchExercise() {
  const[search, setSearch] = useState('Search exercise')

  const handleSearch=()=>{
    console.log("button Clicked")
  }

  return (
    <section id="search">
      <h1>Awesome Excercise you should know</h1>
      <div className="search-container">
  <input type="text" id="exercise-search" placeholder={search} onChange={(e)=>{

  }}/>
  <button id="search-btn" onClick={handleSearch}>Search</button>
</div>

    </section>
  )
}
