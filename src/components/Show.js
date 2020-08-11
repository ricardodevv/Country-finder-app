import React from 'react'

const Show = ({ toShow, founded }) => {
    console.log(toShow)
    if (founded.length === 0) {
      return ( 
          <li>{toShow.name}</li>    
      )
    } else if (founded.length === 1) {
      return (             
          <div>
            <h2>{toShow.name}</h2>
            {console.log(toShow)}
            Capital: {toShow.capital} 
            <br/>
            Population: {toShow.population}
            <br/>
            <h3>Languages</h3>
            <ul> 
              {toShow.languages.map(lang =>
                <li>{lang.name}</li>
              )}
            </ul>
            <img src={toShow.flag} alt='flag'></img>
          </div>
        )
    } else {
      return ( 
          <li>{toShow.name}</li>
        )
    }    
  }

export default Show