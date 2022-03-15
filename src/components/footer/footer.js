import React from "react";
import './footer.css';




var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "200px",
    width: "100%",
    
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '200px',
  width: '100%',
  overflowX:"hidden"
  
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer