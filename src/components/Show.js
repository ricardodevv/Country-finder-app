import React, { useState } from 'react'

const Show = ({ countries, founded }) => {
  const [ button, setButton ] = useState(false)   
  const [ container, setContainer] = useState([])
  
  const isClicked = (props) => {  
    setContainer(container.concat(props))
    setButton(!button)
  }
  
  const removeElement = (props, container) => {
    setContainer(container.filter(el => el !== props))
    setButton(!button)
  }

  const showOnly = (props) => {  
        return (props.map(el =>            
          <div key={el.name}>
          <button onClick={() => removeElement(el, container)}>Show All</button>
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
        <div key={el.name}>
          <li>{el.name}</li>
          <button onClick={() => isClicked(el)}>Show</button>
        </div>
        )
      )}
    
      const aver = button === false 
      ? showUnderTen(founded)
      : showOnly(container)

    // Display part ***
    if (button !== true && founded.length > 10) {
      return <div>please especify the country</div>
    } else if (button !== true && founded.length === 0) {
      return (
        countries.map(el => 
          <li key={el.name}>{el.name}</li>
        )    
      )
    } else if (button !== true && founded.length === 1) {
      return showOnly(founded)
    } else {
      return aver
    } 
  }

export default Show