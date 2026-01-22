// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Dashboard = () => {
  // const [empData, setEmpData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // const [deptData, setDeptData] = useState([])

  // const [deptHr, setDeptHr] = useState(0)
  // const [deptIt, setDeptIt] = useState(0)
  // const [deptAccount, setDeptAccount] = useState(0)

  // useEffect(() => {
  //   const fetchDepartment = async () => {
  //     const res = await axios.get("http://localhost:8084/api/v2/hrsupport/department")
  //     const resData = res.data
  //     setDeptData(resData)

  //     // count emp per department
  //     const deptAcc = resData.filter(dept => dept.name == "ACCOUNT").length
  //     setDeptAccount(deptAcc)
  //     const departIt = resData.filter(dept => dept.name == "IT").length
  //     setDeptIt(departIt)
  //     const departHr = resData.filter(dept => dept.name == "HR").length
  //     setDeptHr(departHr)
  //   }
  //   fetchDepartment();
  // }, []);

  // useEffect(() => {
  //   const fetchEmployee = async () => {
  //     const token = localStorage.getItem("token")
  //     try {
  //       const res = await axios.get("http://localhost:8084/api/v2/hrsupport/employee", {
  //         headers: { Authorization: `Bearer ${token}` }  // Send JWT
  //       })
  //       const resData = res.data
  //       setEmpData(resData)
  //       setIsLoading(false)

  //     } catch (error) {
  //       console.error("Error fetching employees:", err.response?.data || err.message);

  //     }
  //   }
  //   fetchEmployee()
  // }, [])
  // if (isLoading) {
  //   <p>Loading...</p>
  // }
  // const getSubordinateNames = (subIds) => {
  //   if (!subIds || subIds.length === 0) return [];
  //   // Filter employees whose id is in the subordinateIds array
  //   const subs = empData.filter(empSub => subIds.includes(empSub.id)) //"Does the subIds array contain this emp.id?"(goes through each employee (emp) in that list and keeps only those whose id matches one in subIds.)
  //   return subs.length > 0 ? subs : "None"
  // };
  // const getDeptName = (deptId) => {
  //   if (!deptId) return "None";
  //   // Filter employees whose id is in the subordinateIds array
  //   const dept = deptData.find(dpt => dpt.id === deptId)
  //   return dept ? dept.name : "Unknown"
  // };
  // const getManagerName = (mngId) => {
  //   if (!mngId) return "None";  // no manager assigned
  //   const mng = empData.find(m => m.id === mngId) // find employee by managerId
  //   return mng ? `${mng.firstName} ${mng.lastName}` : "Unknown"; // return full name
  // };
  return (
    <>
      <div className="pagetitle">
        <h1>Employee</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
            <li className="breadcrumb-item active">Employee</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">


          <div className="col-lg-12 col-md-12">
            <div className="row">
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card sales-card" style={{ background: "#ffe6f0" }}>

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
                    <h5 className="card-title">Department Accountancy</h5>
                    {/* <h5 className="card-title">Sales <span>| Today</span></h5> */}

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        {/* <i className="bi bi-cart"></i> */}
                        <i className="fas fa-user-check"></i>
                      </div>
                      <div className="ps-3">
                        {/* <h6>{deptAccount}</h6> */}
                        <h6>deptAccount</h6>
                        {/* <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}


                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#e6fffa" }}>

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
                    <h5 className="card-title">Department IT</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-user-times"></i>
                        {/* <i className="bi bi-currency-dollar"></i> */}
                      </div>
                      <div className="ps-3">
                        {/* <h6>{deptIt}</h6> */}
                        <h6>deptIt</h6>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#fff3e6" }}>

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
                    <h5 className="card-title">Department HR</h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fas fa-user-clock"></i>
                      </div>
                      <div className="ps-3">
                        {/* <h6>{deptHr}</h6> */}
                        <h6>deptHr</h6>
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-12 col-xxl-12 col-xl-12">

                <div className="card top-selling overflow-auto">

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Modal Sizes</h5>

                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">
                        Add Employee
                      </button>

                      <div className="modal fade" id="largeModal" tabIndex="-1" aria-hidden="true" style={{ display: "none" }}>
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Large Modal</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title">General Form Elements</h5>

                                  <form>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">FirstName</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">LastName</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                      <div className="col-sm-10">
                                        <input type="email" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Phone Number</label>
                                      <div className="col-sm-10">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Address</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Gender</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputDate" className="col-sm-2 col-form-label">DOB</label>
                                      <div className="col-sm-10">
                                        <input type="date" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputDate" className="col-sm-2 col-form-label">Hired Date</label>
                                      <div className="col-sm-10">
                                        <input type="date" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Position</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Salary</label>
                                      <div className="col-sm-10">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Status</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Manager</label>
                                      <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label className="col-sm-2 col-form-label">Submit Button</label>
                                      <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary">Submit Form</button>
                                      </div>
                                    </div>

                                  </form>

                                </div>
                              </div>
                            </div>

                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>




                    </div>
                  </div>


                  {/* <div className="card-body pb-0">
                    <h5 className="card-title">Employee Attendance</h5>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">FirstName</th>
                          <th scope="col">LasstName</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Address</th>
                          <th scope="col">Gender</th>
                          <th scope="col">DOB</th>
                          <th scope="col">Hired Date</th>
                          <th scope="col">Position</th>
                          <th scope="col">Salary</th>
                          <th scope="col">Status</th>
                          <th scope="col">Manager</th>
                          <th scope="col">Subordinates</th>
                          <th scope="col">Department</th>
                        </tr>
                      </thead>
                      <tbody>
                        {empData.map(((emp, index) => (
                          <tr key={emp.id}>
                            <td scope="row">{index + 1}</td>
                            <td scope="row">{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td className="fw-bold">{emp.address}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.dob}</td>
                            <td>{emp.hireDate}</td>
                            <td>{emp.position}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.status}</td>
                            <td>{getManagerName(emp.managerId)}</td>
                            <td style={{ width: "200px" }}>
                              <ul className="list-unstyled mb-0">
                                {getSubordinateNames(emp.subordinateIds).length > 0 ? (
                                  getSubordinateNames(emp.subordinateIds).map(sub => (

                                    <li key={sub.id}>{sub.firstName} {sub.lastName}</li>
                                  ))
                                ) : (
                                  <li>None</li>

                                )}
                              </ul>

                            </td>
                            <td>
                              {getDeptName(emp.departmentId)}
                            </td>
                          </tr>
                        )))
                        }
                      </tbody>
                    </table>

                  </div> */}

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
