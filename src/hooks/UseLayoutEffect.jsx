import React, { useEffect, useRef, useState } from 'react'

function UseLayoutEffect() {
    const [show, setShow] = useState(false);
    const modalRef = useRef();

    useEffect(()=>{
        if(show && modalRef.current){
            for(let i=0; i< 2000000000;i++){
                i=i
            }
           modalRef.current.style.padding = "200px"
        }
    },[show])

  return (
    <div>
        <button onClick={()=> setShow(prev=> !prev)}>Click Here</button>
        {
            show?
                <div ref={modalRef} style={{padding: "20px"}}>
                    This is Modal
                </div>
            :
            ""
        }
    </div>
  )
}

export default UseLayoutEffect