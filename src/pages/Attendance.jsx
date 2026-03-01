// import { Link } from 'react-router-dom'
import { Table, Modal, Form, DatePicker, TimePicker, Select, Button, message } from 'antd';
import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Attendance() {
  const [countPresent, setCountPresent] = useState(0)
  const [countAbsent, setCountAbsent] = useState(0)
  const [total, setTotal] = useState(0)
  const [data, setData] = useState([])
  const [employees, setEmployees] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form] = Form.useForm()

  const loadAttendance = async () => {
    const res = await axios.get("/attendance")
    const resData = Array.isArray(res.data) ? res.data : [];
    setData(resData);
    setCountPresent(resData.filter(a => a.status === "PRESENT").length)
    setCountAbsent(resData.filter(a => a.status === "ABSENT").length)
    setTotal(resData.length)
  }

  useEffect(() => {
    loadAttendance()
    axios.get("/employee").then(res => {
      setEmployees(Array.isArray(res.data) ? res.data : [])
    })
  }, [])

  const handleAddAttendance = async (values) => {
    setSubmitting(true)
    try {
      const payload = {
        date: values.date.format("YYYY-MM-DD"),
        checkInTime: values.checkInTime ? values.checkInTime.format("HH:mm") : null,
        checkOutTime: values.checkOutTime ? values.checkOutTime.format("HH:mm") : null,
        status: values.status,
        employeeId: values.employeeId,
      }
      await axios.post("/attendance", payload)
      message.success("Attendance record added successfully")
      form.resetFields()
      setModalOpen(false)
      loadAttendance()
    } catch (err) {
      message.error("Failed to add attendance record")
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }


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
                <div className="card info-card revenue-card" style={{ background: "#b1f0f0ff" }}>

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
                {/* <div className="card info-card revenue-card"> */}
                <div className="card info-card revenue-card" style={{ background: "#f0bdb1ff" }}>

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
                {/* <div className="card info-card revenue-card"> */}
                <div className="card info-card revenue-card" style={{ background: "#f0b1bbff" }}>

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
              <div className="col-12 col-xxl-12 col-xl-12">
                <div className="card top-selling overflow-auto">
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">Employee Attendance</h5>
                      <Button type="primary" onClick={() => setModalOpen(true)}>
                        + Add Attendance
                      </Button>
                    </div>

                    <Table
                      columns={attendColumn}
                      dataSource={data}
                      loading={!data.length}
                      scroll={{ x: 'max-content' }}
                      rowKey="id"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Modal
        title="Add Attendance Record"
        open={modalOpen}
        onCancel={() => { setModalOpen(false); form.resetFields(); }}
        footer={null}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleAddAttendance}>
          <Form.Item
            label="Employee"
            name="employeeId"
            rules={[{ required: true, message: "Please select an employee" }]}
          >
            <Select
              showSearch
              placeholder="Select employee"
              optionFilterProp="label"
              options={employees.map(e => ({
                value: e.id,
                label: `${e.firstName} ${e.lastName} (${e.empNo ?? e.id})`
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Select
              placeholder="Select status"
              options={[
                { value: "PRESENT", label: "Present" },
                { value: "ABSENT", label: "Absent" },
                { value: "LATE", label: "Late" },
                { value: "ON_LEAVE", label: "On Leave" },
              ]}
            />
          </Form.Item>

          <Form.Item noStyle shouldUpdate={(prev, curr) => prev.status !== curr.status}>
            {({ getFieldValue }) => {
              const status = getFieldValue("status");
              const needsTimes = status === "PRESENT" || status === "LATE";
              return needsTimes ? (
                <>
                  <Form.Item
                    label="Check-in Time"
                    name="checkInTime"
                    rules={[{ required: true, message: "Please enter check-in time" }]}
                  >
                    <TimePicker style={{ width: "100%" }} format="HH:mm" />
                  </Form.Item>
                  <Form.Item
                    label="Check-out Time"
                    name="checkOutTime"
                  >
                    <TimePicker style={{ width: "100%" }} format="HH:mm" />
                  </Form.Item>
                </>
              ) : null;
            }}
          </Form.Item>

          <Form.Item className="mt-3 mb-0 text-end">
            <Button onClick={() => { setModalOpen(false); form.resetFields(); }} className="me-2">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={submitting}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Attendance
