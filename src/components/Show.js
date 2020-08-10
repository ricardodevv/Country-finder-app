import React from 'react'

const Show = ({ countries, founded }) => {
    if (founded.length > 10) {
      return <div>please especify the country</div>
    } else if (founded.length === 0) {
      return (
        countries.map(el => 
          <li key={el.name}>{el.name}</li>
        )    
      )
    } else {
      return (
        founded.map(el => 
          <li key={el.name}>{el.name}</li>
        )
      )
    }    
  }

export default Show