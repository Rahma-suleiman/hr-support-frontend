// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {

//     const [firstName, setFirstName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [role, setRole] = useState("HR_MANAGER") // Default role for HR/Admin

//     const navigate = useNavigate();

//     const submitRegisterForm = async (e) => {
//         e.preventDefault()
//         const formData = {
//             firstName,
//             lastName,
//             email,
//             password,
//             role
//         }
//         try {
//             const res = await axios.post("http://localhost:8084/api/v1/auth/register", formData)

//             //Store JWT token and role
//             localStorage.setItem("token", res.data.token)
//             localStorage.setItem("role", res.data.role)
//             localStorage.setItem("email", res.data.email)

//             console.log("Registration successful", res.data)

//             // navigate("/dashboard"); // Redirect to dashboard after successful registration
//             navigate("/"); // Redirect to dashboard after successful registration

//         } catch (err) {
//             // console.error("Registration failed:", err.res ? data || err.message);
//             console.error("Registration failed:", err.response?.data || err.message);

//         }
//     }

//     return (
//         <div className="container">
//             <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                             <div className="d-flex justify-content-center py-4">
//                                 <Link to="index.html" className="logo d-flex align-items-center w-auto">
//                                     <img src="assets/img/logo.png" alt />
//                                     <span className="d-none d-lg-block">NiceAdmin</span>
//                                 </Link>
//                             </div>{/* End Logo */}
//                             <div className="card mb-3">
//                                 <div className="card-body">
//                                     <div className="pt-4 pb-2">
//                                         <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
//                                         <p className="text-center small">Enter your personal details to create account</p>
//                                     </div>
//                                     <form className="row g-3 needs-validation" noValidate>
//                                         <div className="col-12">
//                                             <label htmlFor="yourName" className="form-label">First Name</label>
//                                             <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="name" className="form-control" id="yourName" required />
//                                             <div className="invalid-feedback">Please, enter your name!</div>
//                                         </div>
//                                         <div className="col-12">
//                                             <label htmlFor="yourName" className="form-label">Last Name</label>
//                                             <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="name" className="form-control" id="yourName" required />
//                                             <div className="invalid-feedback">Please, enter your name!</div>
//                                         </div>
//                                         <div className="col-12">
//                                             <label htmlFor="yourEmail" className="form-label">Email</label>
//                                             <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="form-control" id="yourEmail" required />
//                                             <div className="invalid-feedback">Please enter a valid Email adddress!</div>
//                                         </div>
//                                         <div className="col-12">
//                                             <label htmlFor="yourPassword" className="form-label">Password</label>
//                                             <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="form-control" id="yourPassword" required />
//                                             <div className="invalid-feedback">Please enter your password!</div>
//                                         </div>
//                                         <div className="col-12">
//                                             <label htmlFor="role" className="form-label">Role</label>
//                                             <select value={role} onChange={(e) => setRole(e.target.value)}className="form-control">
//                                                 {/* <option value="EMPLOYEE">Employee</option> */}
//                                                 <option value="HR_MANAGER">HR Manager</option>
//                                                 <option value="ADMIN">Admin</option>
//                                             </select>
//                                         </div>
//                                         {/* <div class="row mb-3">
//                                             <label class="col-sm-2 col-form-label">Select</label>
//                                             <div class="col-sm-10">
//                                                 <select class="form-select" aria-label="Default select example">
//                                                     <option selected="">Open this select menu</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                 </select>
//                                             </div>
//                                         </div> */}
//                                         <div className="col-12">
//                                             <button className="btn btn-primary w-100" type="submit" onClick={(e) => submitRegisterForm(e)}>Register</button>
//                                         </div>
//                                         <div className="col-12">
//                                             <p className="small mb-0">Already have an account? <Link to="/login">Log in</Link></p>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div className="credits">
//                                 {/* All the links in the footer should remain intact. */}
//                                 {/* You can delete the links only if you purchased the pro version. */}
//                                 {/* Licensing information: https://bootstrapmade.com/license/ */}
//                                 {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
//                                 Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>

//     );
// }

// export default Register;
