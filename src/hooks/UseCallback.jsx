import React, { useCallback, useEffect, useState } from "react";

function UseCallback() {
  const [num, setNum] = useState(1);
  const [isDark, setDark]= useState(false);

  useEffect(()=>{
    console.log("Parent");
  },[])
  
  const getNumber = () => {
    return [num, num + 1, num + 2];
  };

  const getNumberComp = useCallback(()=>{
    return getNumber;
  },[num])

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
        value={num}
      />
      <button onClick={()=> setDark(prev=> !prev)}>ToggleTheme</button>
      <div style={{
        background: isDark? "black" : "white",
        color : isDark? "white" : "black"
      }} >
        <RenderNum getNumberList={getNumberComp} />
      </div>
    </div>
  );
}

function RenderNum({getNumberList}) {
    const [numList, setNumList] = useState([])

    useEffect(()=>{
        console.log("Rendering Num");
        setNumList(getNumberList())
    },[getNumberList])
  return (
    <>
      {numList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}

export default UseCallback;
