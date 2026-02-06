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
