import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponents from './components/ClassComponent'
import DemoComponents from './components/DemoComponent'
import FormsComponents from './components/FormsComponent'
import Player from './views/PlayerComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <ClassComponents></ClassComponents> */}
      {/* <FormsComponents></FormsComponents> */}

      {/* <DemoComponents name="Nam"></DemoComponents> */}
      {/* <DemoComponents name="Zakumi"></DemoComponents> */}
      <br></br>
      <Player></Player>

    </>
  )
}

{/* <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script> */ }

export default App
