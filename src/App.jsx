import { Suspense } from "react"
import Use from "./hooks/Use.jsx"
import UseCallback from "./hooks/UseCallback.jsx"
import UseTransition from "./hooks/UseTransition.jsx"
import UseDefferedValue from "./hooks/UseDefferedValue.jsx"
import UseLayoutEffect from "./hooks/UseLayoutEffect.jsx"
import UseReducer from "./hooks/UseReducer.jsx"

function App() {

  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Use/>
      </Suspense> */}
      {/* <UseCallback/> */}
      {/* <UseTransition/> */}
      {/* <UseDefferedValue/> */}
      {/* <UseLayoutEffect/> */}
      <UseReducer/>
    </div>
  )
}

export default App
