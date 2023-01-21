import React from 'react'
import Restorant from './componant/basic/Restorant';
const App = () => {
      const mystyle = {
      color: "white",
      backgroundColor: "#A0E4CB",
      padding: "10px",
      fontFamily: "Arial"
    };
  return (
    
    <div style={mystyle}>
      <Restorant />
    </div>
  )
}

export default App
