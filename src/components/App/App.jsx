import { useState } from 'react'
import { db } from "../../db/firebase.js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(db)
  return (
    <div>
      <div>
        aaaaa
      </div>
    </div>
  )
}

export default App
