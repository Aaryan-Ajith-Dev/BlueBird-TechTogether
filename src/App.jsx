import { useState } from 'react'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <About/>
      </div>
    </>
  )
}

export default App
