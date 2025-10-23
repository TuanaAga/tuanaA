import React from 'react'

function home() {
     
    const  name = "Arianit";

    const fun = () => {
        console.log("This is a function inside Home component");
    }
 
  const fun2 = (x) => {
        console.log(`Hello: ` + x);
     }
  
     const shume = (x,y) => {
         console.log(x+y);
     }
  return (
    <>
    <h1>Home Page</h1>
    <p>Welcome, {name}!</p>
    <p>{fun()}</p>
    <button onClick={() => fun()}>Kliko</button>
    <button onClick={() => fun2("Arianit")}>Kliko2</button>
    <hr />
    <p>Shuma eshte:  {shume(5,10)}</p>
    <button onClick={() => shume(5,10)}>Shume</button>
    </>
  )
}

export default home