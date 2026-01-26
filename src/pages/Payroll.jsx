import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Popconfirm, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Payslip from './Payslip';

const Payroll = () => {
    const [payslipData, setPayslipData] = useState([])

    useEffect(() => {
        const FetchPayroll = async () => {
            const res = await axios.get("http://localhost:8087/api/v1/payroll");
            setPayslipData(res.data)
        }
        FetchPayroll()
    }, [])


    // FOR MODAL PAYSLIP WHICH OPENS PAYSLIP.jsx file
    const [selectedPayslip, setSelectedPayslip] = useState(null);
    const [openPayslip, setOpenPayslip] = useState(false);

    const handleView = (record) => {
        setSelectedPayslip(record);
        setOpenPayslip(true);
    };



    const handleEdit = (record) => {
        console.log("Editing payroll:", record);
        // open edit modal OR set edit state
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8087/api/v1/payroll/${id}`);
            setPayslipData(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error("Delete failed", error);
        }
    };


    const payrollColumn = [
        {
            title: "S/N",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Emp Name",
            dataIndex: "employeeName",
            key: "employeeName"
        },
        {
            title: "Housing Allowance",
            dataIndex: "housingAllowance",
            key: "housingAllowance"
        },
        {
            title: "Transport Allowance",
            dataIndex: "transportAllowance",
            key: "transportAllowance"
        },
        {
            title: "NHIF",
            dataIndex: "nhif",
            key: "nhif"
        },
        {
            title: "NSSF",
            dataIndex: "nssf",
            key: "nssf"
        },
        {
            title: "PAYE",
            dataIndex: "paye",
            key: "paye"
        },
        {
            title: "loanDeduction",
            dataIndex: "loanDeduction",
            key: "loanDeduction"
        },
        {
            title: "basicSalary",
            dataIndex: "basicSalary",
            key: "basicSalary"
        },
        {
            title: "totalDeduction",
            dataIndex: "totalDeduction",
            key: "totalDeduction"
        },
        {
            title: "grossSalary",
            dataIndex: "grossSalary",
            key: "grossSalary"
        },
        {
            title: "payrollData",
            dataIndex: "payrollDate",
            key: "payrollDate"
        },
        {
            title: "Net Salary",
            dataIndex: "netSalary",
            key: "netSalary"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status"
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleView(record)}
                    />

                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    />

                    <Popconfirm
                        title="Are you sure to delete?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            )
        }

    ]
    // DELETE FUNCTION (using filter)
    // const handleDelete = async (id) => {
    //   const confirm = window.confirm("Are you sure you want to delete this product?");
    //   if (!confirm) return;

    //   try {
    //     // delete from backend
    //     await axios.delete(`http://localhost:8080/api/v1/storetrack/product/${id}`);
    // //OR
    //  await axios.delete("http://localhost:8080/api/v1/storetrack/product/" + id);

    //     // remove deleted row from state using filter
    //     setProduct(prevProducts =>
    //       prevProducts.filter(product => product.id !== id)
    //     );

    //   } catch (error) {
    //     console.error("Error deleting product", error);
    //   }
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

                    <div className="col-lg-12 ">

                        <div className="card col-lg-12">
                            <div className="card-body">
                                <h5 className="card-title">Payroll Table</h5>

                                <Table columns={payrollColumn} dataSource={payslipData} scroll={{ x: 'max-content' }} />
                                <Modal
                                    open={openPayslip}
                                    footer={null}
                                    width={900}
                                    onCancel={() => setOpenPayslip(false)}
                                >
                                    <Payslip payslip={selectedPayslip} onClose={() => setOpenPayslip(false)} />
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Payroll;
