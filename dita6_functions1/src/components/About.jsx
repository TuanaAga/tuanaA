import React from 'react'


function About() {

    const p1 = {
        color:"lightblue",
        fontSize:"20px",
        fontWeight:"bold",
        textDecoration:"underline",
    };

    const p2 = {
          color:"green",
        fontSize:"18px",
        fontStyle:"italic",
    };
  return (
   <>
   <h1 style={{color:"red",fontSize:"34px"}}>About Page</h1>
   <p style={p1}>This is about page of our React application</p>
    <p style={p2}>We are learnin how to use inline styles in React.</p>

    <img src={img1} alt="Nature" />
    <br />
    <img src="" alt="" />
    <br />
    <img src="https://en.wikipedia.org/wiki/Nature_photography"  alt="Nature picture"   />
   </>
  )
}

export default About