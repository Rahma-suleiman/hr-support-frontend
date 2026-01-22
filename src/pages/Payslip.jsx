import axios from "axios";
// import React, { useEffect, useState } from "react";

const Payslip = () => {
//     const [payslipData,setPayslipData] = useState([])

//    useEffect(()=>{
//     const FetchPayroll =async()=>{
//         const res = await axios.get("http://localhost:8087/api/v1/payroll");
//         setPayslipData(res.data)
//     }
//     FetchPayroll()
//    },[])

    return (
        <div id="main">
            <div className="container mt-4">
                <div className="card shadow p-4">

                    {/* Header */}
                    <h3 className="text-center">{payslip.company}</h3>
                    <p className="text-center fw-bold">
                        PAYSLIP – {payslip.month}
                    </p>
                    <hr />

                    {/* Employee Details */}
                    <h5>Employee Details</h5>
                    <p><strong>Name:</strong> {payslip.employeeName}</p>
                    <p><strong>Employee ID:</strong> {payslip.employeeId}</p>
                    <p><strong>Department:</strong> {payslip.department}</p>
                    <p><strong>Position:</strong> {payslip.position}</p>

                    <hr />

                    {/* Earnings */}
                    <h5>Earnings</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Basic Salary</td>
                                <td className="text-end">
                                    {payslip.basic.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Housing Allowance</td>
                                <td className="text-end">
                                    {payslip.housing.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Transport Allowance</td>
                                <td className="text-end">
                                    {payslip.transport.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Overtime</td>
                                <td className="text-end">
                                    {payslip.overtime.toLocaleString()}
                                </td>
                            </tr>
                            <tr className="fw-bold">
                                <td>Gross Salary</td>
                                <td className="text-end">
                                    {grossSalary.toLocaleString()}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Deductions */}
                    <h5>Deductions</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>PAYE</td>
                                <td className="text-end">
                                    {payslip.paye.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>NSSF</td>
                                <td className="text-end">
                                    {payslip.nssf.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>NHIF</td>
                                <td className="text-end">
                                    {payslip.nhif.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Loan Deduction</td>
                                <td className="text-end">
                                    {payslip.loan.toLocaleString()}
                                </td>
                            </tr>
                            <tr className="fw-bold">
                                <td>Total Deductions</td>
                                <td className="text-end">
                                    {totalDeductions.toLocaleString()}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <hr />

                    {/* Net Salary */}
                    <h4 className="text-end text-success">
                        Net Salary: {netSalary.toLocaleString()} TZS
                    </h4>

                    {/* Actions */}
                    <div className="mt-4 d-flex justify-content-between">
                        <button className="btn btn-primary">
                            Download PDF
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => window.print()}
                        >
                            Print Payslip
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payslip;

