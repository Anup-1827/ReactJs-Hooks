import React, { useEffect, useState, useTransition } from 'react'

// Use Transition hook is used to make smooth transition inside the UI

function UseTransition() {
    const [val, setVal] = useState("");
    const [list, setList] = useState([]);

    const [isPending, setTransition] = useTransition()

    const LIMIT_SIZE = 20000;

    const handleChange = (e)=>{
        setVal(e.target.value) // High Priority

        // Less Priority
        setTransition(()=>{
            console.log("Called");
            const l =[];
            for(let i=0; i< LIMIT_SIZE; i++){
                l.push(e.target.value)
            }
            setList(l);
        })
    }


  return (
    <div>
        <input type="text" value={val} onChange={handleChange}/>

        {
            isPending?
            <div>Loading...</div>
            :list.map((item,idx)=><div key={idx}>{item}</div>)
        }
    </div>
  )
}

export default UseTransition