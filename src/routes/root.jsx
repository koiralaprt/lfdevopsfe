import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

import {
  Link,
  Route,
  Routes,
} from "react-router-dom"

import Interns from './Interns'
import Examples from './Examples'
import Assignment from './Assignment'
import RouteParamsExample from './RouteParamsExample'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultView />} />
      <Route path="/interns" element={<Interns />} />
      <Route path="/interns/:id" element={<RouteParamsExample />} />
      <Route path='/examples' element={<Examples />} />
      <Route path='/assignment/*' element={<Assignment />} />
    </Routes>
  )
}

function DefaultView() {
  return <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Hello Interns</h1>
    <div className="card">
      <p>
        <Link to="interns">Interns</Link>||||
        <Link to="examples">Examples</Link>||||
        <Link to="assignment">Assignment</Link>
      </p>
    </div>
    <p className="read-the-docs">
      Welcome to the new feature
    </p>
  </>
}
export default App
