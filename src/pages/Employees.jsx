import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Popconfirm, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Employees = () => {

  const [empData, setEmpData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  const [deptData, setDeptData] = useState([])

  const [deptHr, setDeptHr] = useState(0)
  const [deptIt, setDeptIt] = useState(0)
  const [deptAccount, setDeptAccount] = useState(0)


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [hiredDate, setHiredDate] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState('')
  const [status, setStatus] = useState('')
  const [departmentId, setDepartmentId] = useState('')

  const [isEditing, setIsEditing] = useState(false);
  const [editingEmpId, setEditingEmpId] = useState(null);

  const [empStatuses] = useState([
    { label: "Active", value: "ACTIVE" },
    { label: "On Leave", value: "ON_LEAVE" },
    { label: "Resigned", value: "RESIGNED" },
  ])
  const formData = {
    firstName,
    lastName,
    email,
    phone,
    address,
    gender,
    dob,
    hireDate: hiredDate,   // correct mapping
    position,
    salary,
    status,
    departmentId: Number(departmentId) // important bcz <select> values come as strings
  };


  const handleEdit = (record) => {
    setIsEditing(true);
    setEditingEmpId(record.id);

    setFirstName(record.firstName);
    setLastName(record.lastName);
    setEmail(record.email);
    setPhone(record.phone);
    setAddress(record.address);
    setGender(record.gender);
    setDob(record.dob);
    setHiredDate(record.hireDate);
    setPosition(record.position);
    setSalary(record.salary);
    setStatus(record.status);
    setDepartmentId(record.departmentId);

    // open modal
    const modal = new window.bootstrap.Modal(
      document.getElementById("largeModal")
    );
    modal.show();
  };

  const SubmitFormData = async (e) => {
    e.preventDefault()

    try {
      if (isEditing) {
        //UPDATE
        const res = await axios.put(`http://localhost:8087/api/v2/hrsupport/employee/${editingEmpId}`, formData)
        // It loops through the employees array and replaces only the employee 
        // being edited with the updated data from the server, 
        // while keeping all other employees unchanged.
        setEmpData(
          empData.map(emp =>
            emp.id === editingEmpId ? res.data : emp
          )
        )

      } else {
        //CREATE
        const res = await axios.post("http://localhost:8087/api/v2/hrsupport/employee", formData)
        setEmpData([...empData, res.data])
      }
      setIsEditing(false)
      setEditingEmpId(null)

      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setAddress("")
      setGender("")
      setDob("")
      setHiredDate("")
      setPosition("")
      setSalary("")
      setStatus("")
      setDepartmentId("")

      // ✅ CLOSE MODAL 
      const modalEl = document.getElementById("largeModal");
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      modalInstance.hide();
    } catch (error) {
      console.log("Error saving employee", error)
    }


  }

  const fetchDepartment = async () => {
    try {
      const res = await axios.get("http://localhost:8087/api/v2/hrsupport/department")
      setDeptData(res.data)
    } catch (error) {
      console.error("Error fetching employees", error)
    }

  }

  const fetchEmployee = async () => {
    try {
      const res = await axios.get("http://localhost:8087/api/v2/hrsupport/employee")
      setEmpData(res.data)
    } catch (error) {
      console.error("Error fetching employees", error)
    }
  }

  useEffect(() => {
    if (empData.length === 0 || deptData.length === 0) return;

    const accId = deptData.find(d => d.name === "Accountancy")?.id;
    const itId = deptData.find(d => d.name === "IT")?.id;
    const hrId = deptData.find(d => d.name === "HR")?.id;

    setDeptAccount(empData.filter(e => e.departmentId === accId).length);
    setDeptIt(empData.filter(e => e.departmentId === itId).length);
    setDeptHr(empData.filter(e => e.departmentId === hrId).length);

  }, [empData, deptData]);

  useEffect(() => {

    fetchEmployee()
    fetchDepartment();
  }, [])


  const getDeptName = (deptId) => {
    // Filter employees whose id is in the subordinateIds array
    const dept = deptData.find(dpt => dpt.id === deptId)
    return dept ? dept.name : "None"
  };

  const [selectedEmp, setSelectedEmp] = useState(null);
  const [openEmpDetails, setOpenEmpDetails] = useState(false);
  const handleView = (record) => {
    setSelectedEmp(record);
    setOpenEmpDetails(true)
  }
  const empColumn = [
    {
      title: "S/N",
      dataIndex: "id",
      fixed: "left",
      key: "id"
    },
    {
      title: "Name",
      key: "name",
      width: 200,
      fixed: "left",
      render: (_, record) => (
        record.firstName + " " + record.lastName
      )
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 220
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 150
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      key: "dob"
    },
    {
      title: "Hire Date",
      dataIndex: "hireDate",
      key: "hireDate"
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position"
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          style={{
            color:
              text === "ACTIVE"
                ? "green"
                : text === "ON_LEAVE"
                  ? "orange"
                  : "red",
            fontWeight: "bold"
          }}
        >
          {text}
        </span>
      )
    },
    {
      title: "Department",
      dataIndex: "departmentId",
      key: "departmentId",
      width: 180,
      // render: (_, record) => getDeptName(record.departmentId) //OR
      render: (departmentId) => getDeptName(departmentId)

    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 120,
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          />
          <Button
            type="primary"
            size="small"
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            type="danger"
            size="small"
            onClick={() => handleDelete(record)}
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      )
    }

  ]

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
                <div className="card info-card sales-card" style={{ background: "#e6a3f3ff" }}>
                  {/* <div className="card info-card sales-card" style={{ background: "#f5aecaff" }}> */}

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
                        <h6>{deptAccount}</h6>
                        {/* <h6>Department</h6> */}
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#f3f17fff" }}>
                  {/* <div className="card info-card revenue-card" style={{ background: "#b6f7eaff" }}> */}
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
                        <h6>{deptIt}</h6>
                        {/* <h6>Dept Id</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-md-4 col-sm-6">
                <div className="card info-card revenue-card" style={{ background: "#c4f18fff" }}>
                  {/* <div className="card info-card revenue-card" style={{ background: "#f8cfa3ff" }}> */}

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
                        <h6>{deptHr}</h6>
                        {/* <h6>deptHr</h6> */}
                        {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                      </div>
                    </div>
                  </div>

                </div>
              </div>




            </div>
            <div className="row">


              <div className="col-12 col-xxl-12 col-xl-12">

                <div className="card top-selling overflow-auto">

                  <div className="card">
                    <div className="card-header col-12 col-xxl-12 col-xl-12">
                      {/* <h5 className="card-title">Modal Sizes</h5> */}

                      <button style={{ width: "155px", marginLeft: "22px", marginTop: "22px" }} type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#largeModal">
                        Add Employee
                      </button>

                      <div className="modal fade" id="largeModal" tabIndex="-1" aria-hidden="true" style={{ display: "none" }}>
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">
                                {isEditing ? "Update Employee" : "Register Employee"}
                              </h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                              <div className="card">
                                <div className="card-body" >
                                  {/* <h5 className="card-title">Register Employee</h5> */}

                                  <form className='mt-4' onSubmit={SubmitFormData}>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">FirstName</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">LastName</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Phone Number</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Address</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Gender</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setGender(e.target.value)} value={gender} type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputDate" className="col-sm-2 col-form-label">DOB</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setDob(e.target.value)} value={dob} type="date" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputDate" className="col-sm-2 col-form-label">Hired Date</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setHiredDate(e.target.value)} value={hiredDate} type="date" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Position</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setPosition(e.target.value)} value={position} type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Salary</label>
                                      <div className="col-sm-10">
                                        <input onChange={(e) => setSalary(e.target.value)} value={salary} type="number" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label className="col-sm-2 col-form-label">Status</label>
                                      <div className="col-sm-10">
                                        <select
                                          className="form-select"
                                          value={status}
                                          onChange={(e) => setStatus(e.target.value)}
                                          required
                                        >
                                          <option value="">-- Select Status --</option>

                                          {empStatuses.map((item) => (
                                            <option key={item.value} value={item.value}>
                                              {item.label}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      <label className="col-sm-2 col-form-label">Department</label>
                                      <div className="col-sm-10">
                                        <select
                                          className="form-select"
                                          value={departmentId}
                                          onChange={(e) => setDepartmentId(e.target.value)}
                                          required
                                        >
                                          <option value="">-- Select Department --</option>
                                          {deptData.map((dept) => (
                                            <option key={dept.id} value={dept.id}>
                                              {dept.name}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>

                                    <div className="row ms-3">
                                      {/* <label className="col-sm-2 col-form-label">Submit Button</label> */}
                                      <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary" style={{marginLeft:"128px"}}>
                                          {isEditing ? "Update Employee" : "Submit Form"}
                                        </button>
                                      </div>
                                    </div>

                                  </form>

                                </div>
                              </div>
                            </div>

                            {/* <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                          </div>
                        </div>
                      </div>




                    </div>


                    <div className="card-body pb-0">
                      <h5 className="card-title">Employee </h5>

                      <Table
                        columns={empColumn}
                        dataSource={empData}
                        scroll={{ x: 'max-content' }}
                      />
                      <Modal
                        title="Employee Details"
                        open={openEmpDetails}
                        onCancel={() => setOpenEmpDetails(false)}
                        footer={[
                          <Button key="close" onClick={() => setOpenEmpDetails(false)}>
                            Close
                          </Button>
                        ]}
                      >
                        {selectedEmp && (
                          <div>
                            <p><strong>Name:</strong> {selectedEmp.firstName} {selectedEmp.lastName}</p>
                            <p><strong>Email:</strong> {selectedEmp.email}</p>
                            <p><strong>Phone:</strong> {selectedEmp.phone}</p>
                            <p><strong>Gender:</strong> {selectedEmp.gender}</p>
                            <p><strong>Date of Birth:</strong> {selectedEmp.dob}</p>
                            <p><strong>Hire Date:</strong> {selectedEmp.hireDate}</p>
                            <p><strong>Position:</strong> {selectedEmp.position}</p>
                            <p><strong>Salary:</strong> {selectedEmp.salary}</p>
                            <p>
                              <strong>Status:</strong>{" "}
                              <span
                                style={{
                                  color:
                                    selectedEmp.status === "ACTIVE"
                                      ? "green"
                                      : selectedEmp.status === "ON_LEAVE"
                                        ? "orange"
                                        : "red",
                                  fontWeight: "bold"
                                }}
                              >
                                {selectedEmp.status}
                              </span>
                            </p>
                            <p><strong>Department:</strong> {getDeptName(selectedEmp.departmentId)}</p>
                          </div>
                        )}
                      </Modal>


                    </div>
                  </div>

                </div>
              </div>


            </div>

          </div>

        </div>
      </section >
    </>
  );
}

export default Employees;
