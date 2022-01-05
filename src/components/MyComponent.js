import React, {useEffect, useState} from 'react'

function MyComponent() {
const [name, setname] = useState('')

useEffect(()=>{
    if(name){
    console.log(`use effect executed when name is changed to ${name}`);
    }
},[name])

let updateName=()=>{
    setname('Lavanya')
    alert("Name updated successfully");
}


 return (
            <div>
                
                <p>Name: {name}</p>
                <button onClick={updateName}>UpdateName</button>
                
            </div>
          
        )
}
export default MyComponent 
