import React from 'react'

const Filter = (props) => {
  return (
  <div>
  Search country: <input value={props.search} onChange={props.handleSearch}></input>
  </div>
  )
}

export default Filter