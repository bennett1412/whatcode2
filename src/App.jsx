import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div className='square1'>
        <div className='circle'></div>
        </div>
        <div className='square1'>
        <div className='circle'></div>
        </div>
      </div>
    </div>
  )
}

export default App
