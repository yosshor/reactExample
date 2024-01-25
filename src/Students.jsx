import { useState } from 'react'

function Students(){

    const [count, setCount] = useState(12)

    return <div className="card">
    <button onClick={() => setCount((count) => count  + 3)}>
      the count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
}
export default Students
