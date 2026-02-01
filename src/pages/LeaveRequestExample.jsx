import React, { useState } from "react";

export const LeaveRequestExample = () => {

  // Mock data simulating backend
  const mockLeaveRequests = [
    {
      id: 1,
      employee: { firstName: "Alice", lastName: "Johnson" },
      leaveType: "SICK",
      status: "PENDING",
      startDate: "2026-02-01",
      endDate: "2026-02-03",
      reason: "Flu and fever",
    },
    {
      id: 2,
      employee: { firstName: "Bob", lastName: "Smith" },
      leaveType: "ANNUAL",
      status: "APPROVED",
      startDate: "2026-01-15",
      endDate: "2026-01-20",
      reason: "Family vacation",
    },
    {
      id: 3,
      employee: { firstName: "Carol", lastName: "Miller" },
      leaveType: "OTHER",
      status: "REJECTED",
      startDate: "2026-01-10",
      endDate: "2026-01-12",
      reason: "Personal work",
    },
    {
      id: 4,
      employee: { firstName: "David", lastName: "Lee" },
      leaveType: "SICK",
      status: "PENDING",
      startDate: "2026-02-05",
      endDate: "2026-02-06",
      reason: "Migraine",
    },
  ];

  const [leaveRequests, setLeaveRequests] = useState(mockLeaveRequests);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [filterType, setFilterType] = useState("ALL");

  // Approve/Reject action
  const handleAction = (id, action) => {
    setLeaveRequests(prev =>
      prev.map(lr =>
        lr.id === id ? { ...lr, status: action.toUpperCase() } : lr
      )
    );
    alert(`Leave request ${action}ed successfully`);
  };

  // Filter leave requests
  const filteredRequests = leaveRequests.filter(req => {
    return (
      (filterStatus === "ALL" || req.status === filterStatus) &&
      (filterType === "ALL" || req.leaveType === filterType)
    );
  });

  return (
    <div className="container mt-4">
      <h2>Leave Requests</h2>

      {/* Filters */}
      <div className="filters mb-3 d-flex gap-2">
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="form-select"
        >
          <option value="ALL">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>

        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          className="form-select"
        >
          <option value="ALL">All Types</option>
          <option value="SICK">Sick</option>
          <option value="ANNUAL">Annual</option>
          <option value="OTHER">Other</option>
        </select>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center">
                No leave requests found
              </td>
            </tr>
          )}
          {filteredRequests.map((lr, index) => (
            <tr key={lr.id}>
              <td>{index + 1}</td>
              <td>{lr.employee.firstName} {lr.employee.lastName}</td>
              <td>{lr.leaveType}</td>
              <td>{lr.status}</td>
              <td>{new Date(lr.startDate).toLocaleDateString()}</td>
              <td>{new Date(lr.endDate).toLocaleDateString()}</td>
              <td>{lr.reason}</td>
              <td>
                {lr.status === "PENDING" ? (
                  <>
                    <button
                      className="btn btn-success btn-sm me-1"
                      onClick={() => handleAction(lr.id, "APPROVED")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleAction(lr.id, "REJECTED")}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span>N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

