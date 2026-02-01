import './App.css'
import { RouterProvider } from 'react-router-dom'
import HrRoutes from './routes/HrRoutes'
import { LeaveRequestExample } from './pages/LeaveRequestExample'

function App() {

  return (
    <>
    <RouterProvider router={HrRoutes}/>
    {LeaveRequestExample}
    </>
  )
}

export default App
