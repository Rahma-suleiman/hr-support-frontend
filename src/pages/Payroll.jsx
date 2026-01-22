import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Payroll = () => {
    const [payslipData, setPayslipData] = useState([])

    useEffect(() => {
        const FetchPayroll = async () => {
            const res = await axios.get("http://localhost:8087/api/v1/payroll");
            setPayslipData(res.data)
        }
        FetchPayroll()
    }, [])
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
                                                <h6>Department</h6>
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
                                                <h6>Dept Id</h6>
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
                                                {/* <h6>{deptHr}</h6> */}
                                                <h6>deptHr</h6>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>

                    </div>
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
                                                <h6>Department</h6>
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
                                                <h6>Dept Id</h6>
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



            <section className="section">
                <div className="row">

                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Table with hoverable rows</h5>
                                {/* Table with hoverable rows */}
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Emp Name</th>
                                            <th scope="col">Housing Allowance</th>
                                            <th scope="col">Transport Allowance </th>
                                            <th scope="col">NHIF</th>
                                            <th scope="col">NSSF</th>
                                            <th scope="col">PAYE</th>
                                            <th scope="col">basicSalary</th>
                                            <th scope="col">totalDeduction</th>
                                            <th scope="col">grossSalary</th>
                                            <th scope="col">payrollDate</th>
                                            <th scope="col">paymentDate</th>
                                            <th scope="col">Net Salary</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {payslipData.map((pay,index)=>(
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{pay.employeeName}</td>
                                            <td>{pay.housingAllowance}</td>
                                            <td>{pay.transportAllowance}</td>
                                            <td>{pay.nhif}</td>
                                            <td>{pay.nssf}</td>
                                            <td>{pay.paye}</td>
                                            <td>{pay.basicSalary}</td>
                                            <td>{pay.totalDeduction}</td>
                                            <td>{pay.grossSalary}</td>
                                            <td>{pay.payrollDate}</td>
                                            <td>{pay.paymentDate}</td>
                                            <td>{pay.netSalary}</td>
                                            <td>{pay.status}</td>
                                        </tr>

                                        ))}


                                    </tbody>
                                </table>
                                {/* End Table with hoverable rows */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Payroll;
