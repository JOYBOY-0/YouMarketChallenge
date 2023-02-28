import {RouterProvider} from 'react-router-dom'
import ROUTER from './routes/router'
import './App.css'

function App() {

  return (
    <RouterProvider router={ROUTER} />
  )
}

export default App
