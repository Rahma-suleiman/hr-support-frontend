import { Popconfirm, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeaveRequest = () => {
  const [leaveData, setLeaveData] = useState([])

  const getLeaveRequests = async () => {
    const res = await axios.get("http://localhost:8087/api/v2/hrsupport/leave")
    setLeaveData(res.data)
    console.log(leaveData)
  }
  useEffect(() => {
    getLeaveRequests()
  }, [])
 


  // This means the backend expects JSON body like this:"APPROVED" Not an object, Just a plain enum value as JSON
  const handleAction = async (leaveId, status) => {
    try {
      await axios.put(
        `http://localhost:8087/api/v2/hrsupport/leave/${leaveId}/status`,

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
  // This means the backend expects a string, Just a plain enum value as JSON
  // const handleAction = async (leaveId, status) => {
  //   try {
  //     await axios.put(
  //       `http://localhost:8087/api/v2/hrsupport/leave/${leaveId}/status`,
  //       null, // 👈 no body
  //       {
  //         params: { status } // 👈 sent as request param
  //       }
  //     );

  //     // Refresh table
  //     getLeaveRequests();

  //   } catch (error) {
  //     console.error("Failed to update leave status", error);
  //     alert("Failed to update leave status");
  //   }
  // };

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

              <div class="col-12 col-xxl-12 col-xl-12">
                <div class="card top-selling overflow-auto">



                  <div class="card-body pb-0">
                    <h5 class="card-title">Employee Leaves Request</h5>

                    <Table
                      columns={tableColumn}
                      dataSource={leaveData}
                      scroll={{ x: "max-content" }}
                      loading={!leaveData.length}
                    />


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
