import React from 'react'

function Home() {
    const fun =()=>{
        console.log("Hello World!!!");
    }

    const  fun2 = (name) => {
        console.log("Hello"+name);
          console.log(`Hello${name}`);
    }

  const style={
    color:"pink",
    background: "rgba",
    textAlign:"center",
    padding:"10px",
    borderRadiua:"10px",

  }
  return (
    <>
       <h1 style={{color:"red",background:"lightblue"}}>Home Page</h1>
       <p>{fun()}</p>
       <button onClick={fun}>Kliko</button>
        <button onClick={() =>fun2("Tuana")}>Kliko2</button>

        <h2 style={style}>Styling in React</h2>
        <p style={style}>Shkolla Digjitale</p>
        <p className='text'>Prizren</p>
    </>

  )
}

export default Home