import { Suspense } from "react"
import Use from "./hooks/Use.jsx"
import UseCallback from "./hooks/UseCallback.jsx"
import UseTransition from "./hooks/UseTransition.jsx"

function App() {

  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Use/>
      </Suspense> */}
      {/* <UseCallback/> */}
      <UseTransition/>
    </div>
  )
}

export default App
