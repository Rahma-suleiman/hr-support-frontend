import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Popconfirm, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Payslip from './Payslip';

const Payroll = () => {
    const [payslipData, setPayslipData] = useState([])

    const [employeeId, setEmployeeId] = useState("");
    const [payrollDate, setPayrollDate] = useState("");
    const [housingAllowance, setHousingAllowance] = useState("");
    const [transportAllowance, setTransportAllowance] = useState("");
    const [paye, setPaye] = useState("");
    const [nssf, setNssf] = useState("");
    const [nhif, setNhif] = useState("");
    const [loanDeduction, setLoanDeduction] = useState("");
    const [payrollStatus, setPayrollStatus] = useState("DRAFT");

    const [empData, setEmpData] = useState([])

    const [isEditing, setIsEditing] = useState(false);
    const [editingPayrollId, setEditingPayrollId] = useState(null);


    const fetchEmployee = async () => {
        try {
            const res = await axios.get("/employee")
            setEmpData(res.data)
        } catch (error) {
            console.error("Error fetching employees", error)
        }
    }
    const FetchPayroll = async () => {
        const res = await axios.get("/payroll");
        setPayslipData(res.data)
    }
    const payrollData = {
        employeeId: Number(employeeId),
        payrollDate,
        housingAllowance: Number(housingAllowance),
        transportAllowance: Number(transportAllowance),
        paye: Number(paye),
        nssf: Number(nssf),
        nhif: Number(nhif),
        loanDeduction: Number(loanDeduction),
        status: payrollStatus
    };
    const submitPayroll = async (e) => {
        e.preventDefault();

        try {
            if (isEditing) {
                //UPDATE
                const res = await axios.put(
                    `/payroll/${editingPayrollId}`,
                    payrollData
                );

                //  replace only updated row, keep position
                setPayslipData(prev =>
                    prev.map(item =>
                        item.id === editingPayrollId ? res.data : item
                    )
                );
            } else {
                //CREATE NEW
                const res = await axios.post(
                    "/payroll",
                    payrollData
                );
                setPayslipData([...payslipData, res.data])
            }

            setIsEditing(false)
            // reset form
            setEmployeeId("");
            setPayrollDate("");
            setHousingAllowance("");
            setTransportAllowance("");
            setPaye("");
            setNssf("");
            setNhif("");
            setLoanDeduction("");
            setPayrollStatus("DRAFT");

            // close modal
            const modalEl = document.getElementById("payrollModal");
            const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
            modalInstance.hide();

        } catch (error) {
            console.error("Error saving payroll", error);
        }
    };

    useEffect(() => {
        FetchPayroll()
        fetchEmployee()

    }, [])


    // FOR MODAL PAYSLIP WHICH OPENS PAYSLIP.jsx file
    const [selectedPayslip, setSelectedPayslip] = useState(null);
    const [openPayslip, setOpenPayslip] = useState(false);

    const handleView = (record) => {
        setSelectedPayslip(record);
        setOpenPayslip(true);
    };


    const handleEdit = (record) => {
        setIsEditing(true);
        setEditingPayrollId(record.id);

        setEmployeeId(record.employeeId);
        setPayrollDate(record.payrollDate);
        setHousingAllowance(record.housingAllowance);
        setTransportAllowance(record.transportAllowance);
        setPaye(record.paye);
        setNssf(record.nssf);
        setNhif(record.nhif);
        setLoanDeduction(record.loanDeduction);
        setPayrollStatus(record.status);

        // open modal
        const modal = new window.bootstrap.Modal(
            document.getElementById("payrollModal")
        );
        modal.show();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/payroll/${id}`);
            setPayslipData(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    // This means the backend expects a string, Just a plain enum value as JSON
    const handleAction = async (payrollId, newStatus) => {
        try {
            const res = await axios.put(
                `/payroll/${payrollId}/payrollStatus`,
                null,
                {
                    params: { newStatus } // must match @RequestParam("newStatus")
                }
            );

            // update only changed row (keep position)
            setPayslipData(prev =>
                prev.map(item =>
                    item.id === payrollId ? res.data : item
                )
            );

        } catch (error) {
            console.error("Failed to update payroll status", error);
            alert("Failed to update payroll status");
        }
    };
    const payrollColumn = [
        {
            title: "S/N",
            key: "sn",
            fixed: "left",
            render: (_, __, index) => index + 1
        },
        {
            title: "Emp Name",
            dataIndex: "employeeName",
            key: "employeeName",
            fixed: "left"
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
            title: "Approve Status",
            key: "approve",
            fixed: "right",
            render: (_, record) =>
                record.status === "DRAFT" ? (
                    <span>
                        <Popconfirm
                            title="Approve this payroll?"
                            onConfirm={() => handleAction(record.id, "APPROVED")}
                        >
                            <button className="btn btn-success btn-sm me-1">Approve</button>
                        </Popconfirm>

                        <Popconfirm
                            title="Mark as processed?"
                            onConfirm={() => handleAction(record.id, "PROCESSED")}
                        >
                            <button className="btn btn-danger btn-sm">Process</button>
                        </Popconfirm>
                    </span>
                ) : (
                    <span>N/A</span>
                ),
        },
        {
            title: "Action",
            key: "action",
            fixed: "right",
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

    // const 

    return (
        <>
            <div className="pagetitle">
                <h1>Payroll</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                        <li className="breadcrumb-item active">Payroll</li>
                    </ol>
                </nav>
            </div>



            <section className="section">
                <div className="row">

                    <div className="col-lg-12 ">

                        <div className="card col-lg-12">
                            <div className="card-header col-12 col-xxl-12 col-xl-12">
                                <Button
                                    type="primary"
                                    style={{ marginBottom: "20px" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#payrollModal"
                                >
                                    Add Payroll
                                </Button>

                                <div
                                    className="modal fade"
                                    id="payrollModal"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h5 className="modal-title">
                                                    <i className="fas fa-file-invoice-dollar me-2"></i>
                                                    {/* Create Payroll */}
                                                    {isEditing ? "Update Payroll" : "Add Payroll"}
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                ></button>
                                            </div>

                                            <div className="modal-body">
                                                <form onSubmit={submitPayroll}>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">Employee</label>
                                                        <div className="col-sm-9">
                                                            <select
                                                                className="form-select"
                                                                value={employeeId}
                                                                onChange={(e) => setEmployeeId(e.target.value)}
                                                                required
                                                            >
                                                                <option value="">-- Select Employee --</option>
                                                                {empData.map(emp => (
                                                                    <option key={emp.id} value={emp.id}>
                                                                        {emp.firstName} {emp.lastName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">Payroll Date</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                value={payrollDate}
                                                                onChange={(e) => setPayrollDate(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">Housing Allowance</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={housingAllowance}
                                                                onChange={(e) => setHousingAllowance(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">Transport Allowance</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={transportAllowance}
                                                                onChange={(e) => setTransportAllowance(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">PAYE</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={paye}
                                                                onChange={(e) => setPaye(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">NSSF</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={nssf}
                                                                onChange={(e) => setNssf(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">NHIF</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={nhif}
                                                                onChange={(e) => setNhif(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label className="col-sm-3 col-form-label">Loan Deduction</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                value={loanDeduction}
                                                                onChange={(e) => setLoanDeduction(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-4">
                                                        <label className="col-sm-3 col-form-label">Status</label>
                                                        <div className="col-sm-9">
                                                            <select
                                                                className="form-select"
                                                                value={payrollStatus}
                                                                onChange={(e) => setPayrollStatus(e.target.value)}
                                                            >
                                                                <option value="DRAFT">Draft</option>
                                                                <option value="APPROVED">Approved</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-primary">
                                                            {/* Submit Payroll */}
                                                            {isEditing ? "Submit Updated Payroll" : "Submit New Payroll"}
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Payroll Table</h5>

                                <Table
                                    columns={payrollColumn}
                                    dataSource={payslipData}
                                    loading={!payslipData.length}
                                    scroll={{ x: 'max-content' }} />
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
