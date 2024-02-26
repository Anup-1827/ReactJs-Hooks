import React, {use} from 'react'

const hostName = "https://jsonplaceholder.typicode.com/"
const url = `${hostName}/posts`

function Use() {

  const fetchData = fetch(url).then(res=> res.json()).then(data=> data)
  return (
    <div>
      <pre>
        {JSON.stringify(fetchData,null,2)}
      </pre>
    </div>
  )
}

export default Use