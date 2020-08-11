import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter'
import Show from './components/Show'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ founded, setFounded ] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const arr = response.data.map(el => el)
        setCountries(arr)
      })
  }, [])

  const findCountries = (query) => {
    return countries.filter((el) => 
      el.name.toLowerCase().indexOf(query.toLowerCase()) > -1 )  
  }  

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setFounded(findCountries(search))
  }

  /*const toDisplay = founded.length === 0 
  ? countries
  : founded
  */
 
  console.log('founded', founded)
  console.log('render', countries.length, 'countries')
  console.log(founded.length)
  return (
    <div>
      <h1>Countries Finder</h1>
      <Filter value={search} setSearch={setSearch} handleSearch={handleSearch} />
      <h2>Countries</h2>
      <div> 
        <Show countries={countries} founded={founded} />        
      </div>
    </div>
  )
}

export default App;
