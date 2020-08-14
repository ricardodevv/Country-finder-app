import React, { useState }from 'react'

const Show = ({ countries, founded }) => {
  const [ button, setButton ] = useState(false)   

    const showOnly = (props) => {
      return (
        props.map(el =>           
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
      }

    const showUnderTen = (props) => {  
      return (props.map(el => 
        <div  key={el.name}>
          <li>{el.name}</li>
          <button onClick={() => setButton(!button)}>Show</button>
        </div>
        )
      )}

      const aver = button === false 
      ? showUnderTen(founded)
      : showOnly(founded)

    // Display part ***
    if (founded.length > 10) {
      return <div>please especify the country</div>
    } else if (founded.length === 0) {
      return (
        countries.map(el => 
          <li key={el.name}>{el.name}</li>
        )    
      )
    } else if (founded.length === 1) {
      return showOnly(founded)
    } else {
      return aver
    } 
  }

export default Show