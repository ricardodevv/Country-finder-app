import React from 'react'
import Show from './Show'

const UnderTen = ({ toDisplay, founded }) => {
  if (founded.length < 10) {
    return toDisplay.map(toShow => 
      <Show key={toShow.name} toShow={toShow} founded={founded} />
    )} 
    return <div>Please specify name</div>
  }


export default UnderTen