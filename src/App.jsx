import './App.css'
import { RouterProvider } from 'react-router-dom'
import HrRoutes from './routes/HrRoutes'

function App() {

  return (
    <>
    <RouterProvider router={HrRoutes}/>
    </>
  )
}

export default App
