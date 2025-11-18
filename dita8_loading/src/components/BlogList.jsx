import React from 'react'

function Bloglist(props){
    const list = props.list;
    return (
        <>
         {list.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>City: {item.city}</p>
                    <button onClick={()=> deleteButton(item.id)}>Delete</button>
                    <button onClick={()=> viewButton(item.id)}>View</button>
                    <hr />
                    <button></button>
                </div>
            ))}
        </>
    )
}


export default Bloglist 

            
        