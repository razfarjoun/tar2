import { useState } from 'react'
import './App.css'
import CCColor from './ClassComps/CCColor'
import CCStudent from './ClassComps/CCStudent'
import CCTable from './ClassComps/CCTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>שאלה 1</h3>
      <CCColor />
      <h3>שאלה 2</h3>
      <CCStudent />
      <h3>שאלה 3</h3>
      <CCTable />
    </>
  )
}

export default App
