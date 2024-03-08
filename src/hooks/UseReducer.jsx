import React, { useReducer, useState } from 'react'

// UseReducer is very similar to the UseState
// The only difference is
    // It lets you move the state update logic from an event handler into a single funciton outside your component

// UseReducer is a react hook that lets us manage the reducer function
// Reducer function specifies how the state should get updated
// action is an object with type property, optionally, other properties with additional informatio//n

// Dispatch Function
  // Only update the state variable for the next rerender. If you read the state value, after calling the dispatch function we will still get the old value

function reducerFunc(state, action){
    switch(action.type){
      case "increment":
        return {
          ...state,
          age: state.age +1
        }
      case "changeName":
        return{
          ...state,
          name: action.name
        }
    }
}

const initialState = {
  name: "Anup",
  age: 20
}

function UseReducer() {

  const [state, dispatch] = useReducer(reducerFunc, initialState)

    // Use Reducer returns an array with exactly two values
      // Current State
      // Disptach Function -- Which is used to update the state

    const handleNameChange = (e)=>{
      dispatch(
        {
          type: "changeName",
          name : e.target.value
        }
      ) 
    }

    const handleAgeChange = (e)=>{
      dispatch({
        type: "increment"
      })
    }

    return(
      <div>
        <h5>Change Name</h5>
        <input type="text" name="name" id="name" value={state.name} onChange={handleNameChange}/>

        <button onClick={handleAgeChange}>Increment Age</button>
        <p>{`Your name is ${state.name } and you are ${state.age} years old`}</p>
      </div>
    )

}

export default UseReducer