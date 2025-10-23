import React, { useState } from 'react'

function About() {
    const[list,setList]= useState([
        {id:1, name:"Arianit", age:"31", city:"Prizren"},
        {id:2, name:"Arber", age:"29", city:"Prishtine"},
        {id:3, name:"Ardit", age:"28", city:"Peje"}
    ]);
  return (
   <>
   <h1>Wlcome to the About Page</h1>
   <div>
    {list.map((item)=> (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>City: {item.city}</p>
            <hr  />
            </div>

    ))}
   </div>
   </>
  )
}

export default About