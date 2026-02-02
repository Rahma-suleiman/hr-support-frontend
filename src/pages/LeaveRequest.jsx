import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeaveRequest = () => {
  const [leaveData, setLeaveData] = useState([])

  const getLeaveRequests = async () => {
    const res = await axios.get("http://localhost:8087/api/v2/hrsupport/leave")
    setLeaveData(res.data)

  }
  useEffect(() => {
    getLeaveRequests()
  }, [])
  // const [leaveStatus] = useState([
  //   {label:"Sick", value:"SICK"},
  //   {label:"Vacation", value:"VACATION"},
  //   {label:"Maternity", value:"MATERNITY"},
  //   {label:"Paternity", value:"PATERNITY"},
  //   {label:"Study", value:"STUDY"},
  //   {label:"Compassionate", value:"COMPASSIONATE"} //bereavement (loss of a close loved one, e.g., spouse, parent, child)
  // ])
const handleAction = async (leaveId, status) => {
  try {
    await axios.put(
      `http://localhost:8087/api/v2/hrsupport/leave/${leaveId}/status`,
      status,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    // Refresh table after update
    getLeaveRequests();

  } catch (error) {
    console.error("Failed to update leave status", error);
    alert("Failed to update leave status");
  }
};
  const tableColumn = [
    {
      title: "S/N",
      dataIndex: "s/n",
      key: "s/n",
      render: (index) => index + 1
    },
    {
      title: "Emp Name",
      dataIndex: "empName",
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
                ? "orange"
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
      key: "Actions",
      render: (_, record) => (
        record.status === "PENDING"
          ?
          <span>

            <button
              className="btn btn-success btn-sm me-1"
              onClick={() => handleAction(record.id, "APPROVED")}
            >
              Approave
            </button>
            <button
              className="btn btn-danger btn-sm me-1"
              onClick={() => handleAction(record.id, "REJECTED")}
            >
              Reject
            </button>
          </span>
          : <span>N/A</span>
      )
    }
  ]
  return (
    <>
      <div className="pagetitle">
        <h1>Leave Request</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Payroll</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">

          <div className="col-lg-12 col-md-12">
            <div className="row">

              <div class="col-12 col-xxl-12 col-xl-12">
                <div class="card top-selling overflow-auto">



                  <div class="card-body pb-0">
                    <h5 class="card-title">Employee Leaves Request</h5>

                    <Table
                      columns={tableColumn}
                      dataSource={leaveData}
                      scroll={{ x: 'max-content' }} />

                  </div>

                </div>
              </div>


            </div>
          </div>



        </div>
      </section>
    </>
  );
};

export default LeaveRequest;
