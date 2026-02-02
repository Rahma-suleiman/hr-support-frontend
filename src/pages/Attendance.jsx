// import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Attendance() {
 const [countPresent, setCountPresent] = useState(0)
  const [countAbsent, setCountAbsent] = useState(0)
  const [total, setTotal] = useState(0)

  const [data, setData] = useState([])

  useEffect(() => {
    const handleAttendance = async () => {
      const res = await axios.get("http://localhost:8087/api/v2/hrsupport/attendance")
      const resData = res.data;
      setData(resData);
      // present count
      const resultPresent = resData.filter(attend => attend.status == "PRESENT")
      setCountPresent(resultPresent.length)

      // absent count
      const resultAbsent = resData.filter(attend => attend.status == "ABSENT").length
      setCountAbsent(resultAbsent)

      // total attendance count
      setTotal(resData.length)

    }
    handleAttendance()
  }, [])


  const renderStatus=(status)=>{
    if (status === "PRESENT") {
      return <span style={{color:"green"}}>PRESENT</span>
    }
    if (status === "ABSENT") {
      return <span style={{color:"red"}}>ABSENT</span>
    }
  }
  return (
    <>
      <div className="pagetitle">
        <h1>Attendance</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="index.html">Dashboard</Link></li>
            <li className="breadcrumb-item active">Attendance</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">

          <div className="col-lg-12 col-md-12">
            <div className="row">
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card sales-card">

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

                  <div className="card-body">
                    <h5 className="card-title">Present Summary <span> | Today</span> </h5>
                    {/* <h5 className="card-title">Sales <span>| Today</span></h5> */}

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        {/* <i className="bi bi-cart"></i> */}
                        <i className="fas fa-user-check"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{countPresent}</h6>
                        {/* <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card">

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

                  <div className="card-body">
                    <h5 className="card-title">Absent Summary <span> | Today</span> </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-user-times"></i>
                        {/* <i className="bi bi-currency-dollar"></i> */}
                      </div>
                      <div className="ps-3">
                        <h6>{countAbsent}</h6>
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card">

                  <div className="filter">
                    <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      {/* <li><Link className="dropdown-item" to="#">Today</Link></li> */}
                      <li><Link className="dropdown-item" to="#">This Month</Link></li>
                      <li><Link className="dropdown-item" to="#">This Year</Link></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Total Attendance<span> | Today</span> </h5>
                    {/* <h5 className="card-title">Away Summary<span> | Today</span> </h5> */}

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-user-clock"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{total}</h6>
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-12 col-xxl-12 col-xl-12">
                <div class="card top-selling overflow-auto">

                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>


                  <div class="card-body pb-0">
                    <h5 class="card-title">Employee Attendance</h5>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">Date</th>
                          <th scope="col">Check in Time</th>
                          <th scope="col">Check Out Time</th>
                          <th scope="col">Status</th>
                          <th scope="col">EmployeeId</th>
                          {/* <th scope="col">Name</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((attend) => (
                          <tr key={attend.id}>
                            <td scope="row">{attend.id}</td>
                            <td>{attend.date}</td>
                            <td>{attend.checkInTime ? attend.checkInTime : "-"}</td>
                            <td>{attend.checkOutTime ? attend.checkOutTime : "-"}</td>
                            {/* <td className="fw-bold">{attend.status}</td> */}
                            <td className="fw-bold">{renderStatus(attend.status)}</td>
                            <td>{attend.employeeId}</td>
                            {/* <td style={{textAlign:"center"}}>{attend.employeeId}</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                  </div>

                </div>
              </div>


            </div>
          </div>



        </div>
      </section>
    </>
  );
}

export default Attendance
