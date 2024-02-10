import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [shapes,setshapes] = useState([]);
  const [selectedShape,setselectedShape] = useState('square');

  function handleClick() {
      setshapes([...shapes,selectedShape]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(e)=>{setselectedShape(e.target.value)}}>
          <option>Square</option>  
          <option>Circle</option>  
        </select> 
        <button onClick={handleClick}>Add Shape</button>

      </div>
      <div id="shapes-holder">
        {shapes.map((item, index) => (
          <div key={index} className={item.toLowerCase()}>{index}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
