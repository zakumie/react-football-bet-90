import './App.css'
import NavComponent from './views/NavComponent'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <NavComponent></NavComponent>
      </div>
      <div className='main'>
        <Outlet />
      </div>

    </>
  )
}

{/* <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script> */ }

export default App
