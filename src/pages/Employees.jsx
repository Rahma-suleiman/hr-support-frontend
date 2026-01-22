import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Employees = () => {

  const [empData, setEmpData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [deptData, setDeptData] = useState([])

  const [deptHr, setDeptHr] = useState(0)
  const [deptIt, setDeptIt] = useState(0)
  const [deptAccount, setDeptAccount] = useState(0)

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')
  // const [dob, setDob] = useState('')


  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const res = await axios.get("http://localhost:8087/api/v2/hrsupport/department")
        setDeptData(res.data)
      } catch (error) {
        console.error("Error fetching employees", error)
      } finally {

        setIsLoading(false)
      }

    }
    fetchDepartment();
  }, []);

  useEffect(() => {
    if (empData.length === 0 || deptData.length === 0) return;

    const accId = deptData.find(d => d.name === "Accountancy")?.id;
    const itId = deptData.find(d => d.name === "IT")?.id;
    const hrId = deptData.find(d => d.name === "HR")?.id;

    setDeptAccount(empData.filter(e => e.departmentId === accId).length);
    setDeptIt(empData.filter(e => e.departmentId === itId).length);
    setDeptHr(empData.filter(e => e.departmentId === hrId).length);

  }, [empData, deptData]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get("http://localhost:8087/api/v2/hrsupport/employee")
        setEmpData(res.data)
      } catch (error) {
        console.error("Error fetching employees", error)
      } finally {

        setIsLoading(false)
      }
    }
    fetchEmployee()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }
  const getDeptName = (deptId) => {
    // Filter employees whose id is in the subordinateIds array
    const dept = deptData.find(dpt => dpt.id === deptId)
    return dept ? dept.name : "None"
  };
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
                        <h6>{deptAccount}</h6>
                        {/* <h6>Department</h6> */}
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
                        <h6>{deptIt}</h6>
                        {/* <h6>Dept Id</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

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
                        <h6>{deptHr}</h6>
                        {/* <h6>deptHr</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-12 col-xxl-12 col-xl-12">

                <div className="card top-selling overflow-auto">

                  <div className="card">
                    <div className="card-header col-12 col-xxl-12 col-xl-12">
                      {/* <h5 className="card-title">Modal Sizes</h5> */}

                      <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#largeModal">
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


                  <div className="card-body pb-0">
                    <h5 className="card-title">Employee </h5>
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
                          {/* <th scope="col">Manager</th>
                          <th scope="col">Subordinates</th> */}
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
                            <td>{emp.address}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.dob}</td>
                            <td>{emp.hireDate}</td>
                            <td>{emp.position}</td>
                            <td>{emp.salary}</td>
                            <td className="fw-bold">{emp.status}</td>
                            {/* <td>{getManagerName(emp.managerId)}</td>
                            <td style={{width:"200px"}}>
                              <ul className="list-unstyled mb-0">
                                {getSubordinateNames(emp.subordinateIds).length > 0 ? (
                                  getSubordinateNames(emp.subordinateIds).map(sub =>(

                                    <li key={sub.id}>{sub.firstName} {sub.lastName}</li>
                                  ))
                                ): (
                                  <li>None</li>

                                )}
                              </ul>

                            </td> */}
                            <td>
                              {getDeptName(emp.departmentId)}
                            </td>
                          </tr>
                        )))
                        }
                      </tbody>
                    </table>

                  </div>

                </div>
              </div>


            </div>

          </div>
          {/* <div className="row">

            <div className="col-lg-12 col-md-12">
              <div className="row">

                <div className="col-lg-12">

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Datatables</h5>
                      
                      <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                        <div className="datatable-top">
                          <div className="datatable-dropdown">
                            <label>
                              <select className="datatable-selector" name="per-page">
                                <option value="5">5</option>
                                <option value="10" selected="">10</option>
                                <option value="15">15</option>
                                <option value="-1">All</option>
                              </select> entries per page
                            </label>
                          </div>
                          <div className="datatable-search">
                            <input className="datatable-input" placeholder="Search..." type="search" name="search" title="Search within table" />
                          </div>
                        </div>
                        <div className="datatable-container">
                          <table className="table datatable datatable-table">
                            <thead>
                              <tr>
                                <th data-sortable="true" style={{width: "20.825852782764812%"}}>
                                  <button className="datatable-sorter"><b>N</b>ame</button>
                                </th>
                                <th data-sortable="true" style={{width: "11.131059245960502%"}}>
                                  <button className="datatable-sorter">Ext.</button>
                                </th>
                                <th data-sortable="true" style={{width: "26.750448833034113%"}}>
                                  <button className="datatable-sorter">City</button>
                                </th>
                                <th data-format="YYYY/DD/MM" data-sortable="true" data-type="date" style={{width: "18.850987432675044%"}}>
                                  <button className="datatable-sorter">Start Date</button>
                                </th>
                                <th data-sortable="true" className="red" style={{width: "22.44165170556553%"}}>
                                  <button className="datatable-sorter">Completion</button>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr data-index="0">
                                <td>Unity Pugh</td>
                                <td>9958</td>
                                <td>Curicó</td>
                                <td>2005/02/11</td>
                                <td className="green">37%</td>
                              </tr>
                              <tr data-index="1">
                                <td>Theodore Duran</td>
                                <td>8971</td>
                                <td>Dhanbad</td>
                                <td>1999/04/07</td>
                                <td className="green">97%</td>
                              </tr>
                              <tr data-index="2">
                                <td>Kylie Bishop</td>
                                <td>3147</td>
                                <td>Norman</td>
                                <td>2005/09/08</td>
                                <td className="green">63%</td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                        <div className="datatable-bottom">
                          <div className="datatable-info">Showing 1 to 10 of 100 entries</div>
                          <nav className="datatable-pagination"><ul className="datatable-pagination-list"><li className="datatable-pagination-list-item datatable-hidden datatable-disabled"><button data-page="1" className="datatable-pagination-list-item-link" aria-label="Page 1">‹</button></li><li className="datatable-pagination-list-item datatable-active"><button data-page="1" className="datatable-pagination-list-item-link" aria-label="Page 1">1</button></li><li className="datatable-pagination-list-item"><button data-page="2" className="datatable-pagination-list-item-link" aria-label="Page 2">2</button></li><li className="datatable-pagination-list-item"><button data-page="3" className="datatable-pagination-list-item-link" aria-label="Page 3">3</button></li><li className="datatable-pagination-list-item"><button data-page="4" className="datatable-pagination-list-item-link" aria-label="Page 4">4</button></li><li className="datatable-pagination-list-item"><button data-page="5" className="datatable-pagination-list-item-link" aria-label="Page 5">5</button></li><li className="datatable-pagination-list-item"><button data-page="6" className="datatable-pagination-list-item-link" aria-label="Page 6">6</button></li><li className="datatable-pagination-list-item"><button data-page="7" className="datatable-pagination-list-item-link" aria-label="Page 7">7</button></li><li className="datatable-pagination-list-item datatable-ellipsis datatable-disabled"><button className="datatable-pagination-list-item-link">…</button></li><li className="datatable-pagination-list-item"><button data-page="10" className="datatable-pagination-list-item-link" aria-label="Page 10">10</button></li><li className="datatable-pagination-list-item"><button data-page="2" className="datatable-pagination-list-item-link" aria-label="Page 2">›</button></li></ul></nav>
                        </div></div>

                    </div>
                  </div>

                </div>


              </div>

            </div>
          </div> */}
        </div>
      </section >
    </>
  );
}

export default Employees;
