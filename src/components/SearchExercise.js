import React, { useEffect, useState } from 'react';
import './SearchExercise.css';
import { exerciseOption, fetchData } from '../Utils/fetchData';
import HorizontalScroll from './HorizontalScroll';

export default function SearchExercise({setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Search exercise');
  // const[exercises, setExercises] = useState([])
  const[bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExerciseData();
  },[])

  const handleSearch = async () => {
    console.log("button clicked")
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      

      setSearch('');
      setExercises(searchedExercises);
      console.log(exercisesData)
    }
  };
  

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section id="search">
      <h1>Awesome Exercise you should know</h1>
      <div className="search-container">
        <input
          type="text"
          id="exercise-search"
          placeholder={placeholderText}
          value={search}
          onChange={handleChange}
        />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
        <div>
          <HorizontalScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
    </section>
  );
}
