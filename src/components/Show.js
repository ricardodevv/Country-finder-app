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
    } else if (founded.length === 1) {
      return(  
        founded.map(el =>           
          <div key={el.name}>
            <h2>{el.name}</h2>
            {console.log(el)}
            Capital: {el.capital} 
            <br/>
            Population: {el.population}
            <br/>
            <h3>Languages</h3>
            <ul>
              {el.languages.map(lang => 
                <li key={lang.name}>{lang.name}</li>
              )} 
            </ul>
            <img src={el.flag} alt='flag'></img>
          </div>
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