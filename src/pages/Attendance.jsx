// import { Link } from 'react-router-dom'
import { Table } from 'antd';
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


  const renderStatus = (status) => {
    if (status === "PRESENT") {
      return <span style={{ color: "green" }}>PRESENT</span>
    }
    if (status === "ABSENT") {
      return <span style={{ color: "red" }}>ABSENT</span>
    }
  }
  const attendColumn = [
    {
      title: "S/N",
      key: "sn",
      fixed: "left",
      render: (_, __, index) => index + 1
    },
    // {
    //   title: "Emp Name",
    //   dataIndex: "employeeName",
    //   key: "employeeName",
    //   fixed: "left"
    // },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      // fixed: "left"
    },
    {
      title: "Check in Time",
      dataIndex: "checkInTime",
      key: "checkInTime",
      render: (value) => value ? value : "-"
    },
    {
      title: "Check Out Time",
      dataIndex: "checkOutTime",
      key: "checkOutTime",
      render: (value) => value ? value : "-"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          style={{
            color:
              text === "PRESENT"
                ? "green"
                : "red",
            fontWeight: "bold"
          }}
        >
          {text}
        </span>
      )
    },


  ]
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


                  <div class="card-body pb-0">
                    <h5 class="card-title">Employee Attendance</h5>

                    <Table
                      columns={attendColumn}
                      dataSource={data}
                      loading={!data.length}
                      scroll={{ x: 'max-content' }}
                    />
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
