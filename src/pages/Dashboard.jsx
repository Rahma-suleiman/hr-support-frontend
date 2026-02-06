// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const [empData, setEmpData] = useState([])
  const [empCount, setEmpCount] = useState(0)

  const [deptData, setDeptData] = useState([])
  const [deptCount, setDeptCount] = useState(0)

  const [pendingCount, setPendingCount] = useState([])
  const [leaveCount, setLeaveCount] = useState(0)


  const fetchEmployee = async () => {
    try {
      const res = await axios.get("http://localhost:8087/api/v2/hrsupport/employee")
      const resData = res.data
      setEmpCount(resData.length)
       //on leave count
      const onLeave = resData.filter(leave => leave.status == "ON_LEAVE")
      setLeaveCount(onLeave.length)
    } catch (error) {
      console.error("Error fetching employees", error)
    }
  }

  const fetchDepartment = async () => {
    try {
      const res = await axios.get("http://localhost:8087/api/v2/hrsupport/department")
      const resData = res.data
      setDeptCount(resData.length)
     
    } catch (error) {
      console.error("Error fetching employees", error)
    }

  }
  const getLeaveRequests = async () => {
    const res = await axios.get("http://localhost:8087/api/v2/hrsupport/leave")
    const resData = res.data
    // setLeaveCount(resData)
    //on leave count
    const pending = resData.filter(leave => leave.status == "PENDING")
    setPendingCount(pending.length)

  }
  useEffect(() => {
    fetchEmployee()
    fetchDepartment()
    getLeaveRequests()
  }, [])

  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            {/* <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li> */}
            {/* <li className="breadcrumb-item active">Dashboard</li> */}
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">


          <div className="col-lg-12 col-md-12">
            <div className="row">
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card sales-card" style={{ background: "#f5aecaff" }}>
                  {/* <div className="card info-card sales-card" style={{ background: "#ffe6f0" }}> */}

                  <div className="filter">
                    <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><Link className="dropdown-item" to="#">Today</Link></li>
                      <li><Link className="dropdown-item" to="#">This Month</Link></li>
                      <li><Link className="dropdown-item" to="#">This Year</Link></li>
                    </ul>
                  </div>

                  <div className="card-body" >
                    <h5 className="card-title">Total Employee </h5>
                    {/* <h5 className="card-title">Sales <span>| Today</span></h5> */}

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        {/* <i className="bi bi-cart"></i> */}
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{empCount}</h6>
                        {/* <h6>deptAccount</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}


                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#b6f7eaff" }}>
                  {/* <div className="card info-card revenue-card" style={{ background: "#e6fffa" }}> */}

                  {/* <div className="filter">
                    <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><Link className="dropdown-item" to="#">Today</Link></li>
                      <li><Link className="dropdown-item" to="#">This Month</Link></li>
                      <li><Link className="dropdown-item" to="#">This Year</Link></li>
                    </ul>
                  </div> */}

                  <div className="card-body">
                    <h5 className="card-title">Total Department</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-building"></i>
                        {/* <i className="bi bi-currency-dollar"></i> */}
                      </div>
                      <div className="ps-3">
                        <h6>{deptCount}</h6>
                        {/* <h6>deptIt</h6> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#f8cfa3ff" }}>
                  {/* <div className="card info-card revenue-card" style={{ background: "#fff3e6" }}> */}

                  {/* <div className="filter">
                    <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><Link className="dropdown-item" to="#">Today</Link></li>
                      <li><Link className="dropdown-item" to="#">This Month</Link></li>
                      <li><Link className="dropdown-item" to="#">This Year</Link></li>
                    </ul>
                  </div> */}

                  <div className="card-body">
                    <h5 className="card-title">Total On Leave</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-plane-departure"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{leaveCount}</h6>
                        {/* <h6>deptHr</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#f8cfa3ff" }}>
               {/*  */}

                  <div className="card-body">
                    <h5 className="card-title">Pending LeaveRequest</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-user-clock"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{pendingCount}</h6>
                        {/* <h6>deptHr</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>

          </div>

        </div>
      </section >
    </>
  );
}

export default Dashboard;
