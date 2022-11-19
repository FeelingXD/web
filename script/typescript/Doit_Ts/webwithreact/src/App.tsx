import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const user ={name:'Jack', age:32}
  return (
    <div className="App">
      {JSON.stringify(user)}
    </div>
  )
}

export default App
