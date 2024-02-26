import React, { useDeferredValue, useEffect, useMemo, useState } from 'react'

function UseDefferedValue() {
    const [val, setVal] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=>setVal(e.target.value)} value={val}/>
        <List num={val}/>
    </div>
  )
}

function List({num}){
    const deferedValue = useDeferredValue(num);

    useEffect(()=>{
        console.log(`Input : ${num},  DeferedValue : ${deferedValue}`);
    },[num,deferedValue])

    const LIMI_SIZE = 20000;

    const list = useMemo(()=>{
        const l = []
        for(let i=0; i< LIMI_SIZE; i++){
            l.push(
                <div key={i}>{num}</div>
            )
        }
        return l;
    },[deferedValue])

    return list;
}

export default UseDefferedValue