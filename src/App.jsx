import './App.css'
import { RouterProvider } from 'react-router-dom'
import HrRoutes from './routes/HrRoutes'
// import Payslip from './pages/Payslip'
// import { PayslipExample } from './pages/PayslipExample'

function App() {

  return (
    <>
    <RouterProvider router={HrRoutes}/>
    {/* <PayslipExample/> */}
    </>
  )
}

export default App
