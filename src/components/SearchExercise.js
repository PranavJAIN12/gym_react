import React, { useState } from 'react';
import './SearchExercise.css';
import { exerciseOption, fetchData } from '../Utils/fetchData';

export default function SearchExercise() {
  const [search, setSearch] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Search exercise');

  const handleSearch = async () => {
    console.log('button Clicked');
    if (search) {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        exerciseOption
      );
      console.log(exerciseData);
      if (exerciseData) {
        const searchedExercises = exerciseData.filter(
          (item) => (
            (item.name && item.name.toLowerCase().includes(search)) ||
            (item.target && item.target.toLowerCase().includes(search)) ||
            (item.equipment && item.equipment.toLowerCase().includes(search)) ||
            (item.bodyPart && item.bodyPart.toLowerCase().includes(search))
          )
        );
        console.log(searchedExercises);
      }
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
    </section>
  );
}
