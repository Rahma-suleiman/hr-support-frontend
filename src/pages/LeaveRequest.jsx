import { Popconfirm, Table, Modal, Form, DatePicker, Select, Input, Button, message } from "antd";
import axios from '../api/axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeaveRequest = () => {
  const [leaveData, setLeaveData] = useState([])
  const [employees, setEmployees] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form] = Form.useForm()

  const getLeaveRequests = async () => {
    const res = await axios.get("/leave")
    setLeaveData(Array.isArray(res.data) ? res.data : [])
  }

  useEffect(() => {
    getLeaveRequests()
    axios.get("/employee").then(res => {
      setEmployees(Array.isArray(res.data) ? res.data : [])
    })
  }, [])

  const handleAddLeave = async (values) => {
    setSubmitting(true)
    try {
      const payload = {
        leaveType: values.leaveType,
        startDate: values.startDate.format("YYYY-MM-DD"),
        endDate: values.endDate.format("YYYY-MM-DD"),
        reason: values.reason,
        employeeId: values.employeeId,
      }
      await axios.post("/leave", payload)
      message.success("Leave request submitted successfully")
      form.resetFields()
      setModalOpen(false)
      getLeaveRequests()
    } catch (err) {
      message.error("Failed to submit leave request")
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }
 


  // This means the backend expects JSON body like this:"APPROVED" Not an object, Just a plain enum value as JSON
  const handleAction = async (leaveId, status) => {
    try {
      await axios.put(
        `/leave/${leaveId}/status`,

        /*
          We are sending ONLY a string value (example: "APPROVED").
  
          Axios does NOT automatically convert a single string into JSON.
          So we manually convert it into valid JSON format:
  
              "APPROVED"  →  JSON.stringify(status)
  
          This allows Spring Boot to receive it correctly as:
              @RequestBody LeaveStatusEnum newStatus
        */
        JSON.stringify(status),

        //  It tells the backend:
        // “Hey Spring Boot, the data I’m sending is JSON.”
        // Spring uses this header to decide how to read (@RequestBody) the data.
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Reload the leave list after updating the status
      getLeaveRequests();
    } catch (error) {
      console.error("Failed to update leave status", error);
      alert("Failed to update leave status");
    }
  };
 
  const tableColumn = [
    {
      title: "S/N",
      key: "sn",
      fixed: "left",
      render: (_, __, index) => index + 1
    },
    {
      title: "Emp Name",
      dataIndex: "empName",
      fixed:"left",
      key: "empName"
    },
    {
      title: "Leave Type",
      dataIndex: "leaveType",
      key: "leaveType"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          style={{
            color: text === "PENDING"
              ? "orange"
              : text === "APPROVED"
                ? "green"
                : "red"
          }}
        >
          {text}
        </span>
      )
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate"
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason"
    },
    {
      title: "Actions",
      key: "actions",
      fixed:"right",
      render: (_, record) =>
        record.status === "PENDING" ? (
          <span>
            <Popconfirm
              title="Approve this leave request?"
              onConfirm={() => handleAction(record.id, "APPROVED")}
            >
              <button className="btn btn-success btn-sm me-1">Approve</button>
            </Popconfirm>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleAction(record.id, "REJECTED")}
            >
              Reject
            </button>
          </span>
        ) : (
          <span>N/A</span>
        ),
    }

  ]
  return (
    <>
      <div className="pagetitle">
        <h1>Leave Request</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Leave Request</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">

          <div className="col-lg-12 col-md-12">
            <div className="row">

              <div className="col-12 col-xxl-12 col-xl-12">
                <div className="card top-selling overflow-auto">
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">Employee Leaves Request</h5>
                      <Button type="primary" onClick={() => setModalOpen(true)}>
                        + Add Leave Request
                      </Button>
                    </div>

                    <Table
                      columns={tableColumn}
                      dataSource={leaveData}
                      scroll={{ x: "max-content" }}
                      loading={!leaveData.length}
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
        title="Add Leave Request"
        open={modalOpen}
        onCancel={() => { setModalOpen(false); form.resetFields(); }}
        footer={null}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleAddLeave}>
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
            label="Leave Type"
            name="leaveType"
            rules={[{ required: true, message: "Please select a leave type" }]}
          >
            <Select
              placeholder="Select leave type"
              options={[
                { value: "SICK", label: "Sick Leave" },
                { value: "VACATION", label: "Vacation" },
                { value: "MATERNITY", label: "Maternity Leave" },
                { value: "PATERNITY", label: "Paternity Leave" },
                { value: "STUDY", label: "Study Leave" },
                { value: "COMPASSIONATE", label: "Compassionate Leave" },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Start Date"
            name="startDate"
            rules={[{ required: true, message: "Please select start date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="endDate"
            rules={[{ required: true, message: "Please select end date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Reason"
            name="reason"
            rules={[{ required: true, message: "Please enter a reason" }]}
          >
            <Input.TextArea rows={3} placeholder="Enter reason for leave" />
          </Form.Item>

          <Form.Item className="mt-3 mb-0 text-end">
            <Button onClick={() => { setModalOpen(false); form.resetFields(); }} className="me-2">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={submitting}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LeaveRequest;
