import React from 'react'

function Bloglist(props){
    const list = props.list;
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                      <th>Age</th>
                        <th>City</th>
                          <th>Actions</th>
                </tr>
            </thead>
            <tbody>
         {list.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>Age: {item.age}</td>
                    <td>City: {item.city}</td>
                    <td>
                    <button onClick={()=> deleteButton(item.id)}>Delete</button>
                    <button onClick={()=> viewButton(item.id)}>View</button>              
                    <button></button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default Bloglist 

            
        