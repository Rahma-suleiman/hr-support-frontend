// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const submitLoginForm = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:8084/api/v1/auth/authenticate", { email, password });
//             // save token and role
//             localStorage.setItem("token", res.data.token); // Store JWT for authenticated requests
//             localStorage.setItem("role", res.data.role);

//             localStorage.setItem("email", res.data.email);

//             console.log("Login successful", res.data);

//             // navigate("/dashboard"); // Redirect after login
//             navigate("/"); // Redirect after login

//         } catch (error) {
//             console.error("Login failed", error.response?.data || error.message);

//         }
//     }
//     // const submitLoginForm = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const res = await axios.post("http://localhost:8088/api/v1/auth/authenticate", { email, password });

//     //         // Adjust keys to match backend payload
//     //         localStorage.setItem("token", res.data.token);
//     //         localStorage.setItem("role", res.data.role);
//     //         localStorage.setItem("email", res.data.email);

//     //         console.log("Login successful", res.data);

//     //         // Force redirect
//     //         navigate("/", { replace: true });

//     //     } catch (error) {
//     //         console.error("Login failed", error.response?.data || error.message);
//     //         alert("Invalid login credentials");
//     //     }
//     // };

//     return (
//         <div className="container">
//             <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                             {/* <div className="d-flex justify-content-center py-4">
//                                 <Link to="index.html" className="logo d-flex align-items-center w-auto">
//                                     <img src="assets/img/logo.png" alt />
//                                     <span className="d-none d-lg-block">NiceAdmin</span>
//                                 </Link>
//                             </div> */}
//                             <div className="card mb-3">
//                                 <div className="card-body">
//                                     <div className="pt-4 pb-2">
//                                         <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
//                                         <p className="text-center small">Enter your username &amp; password to login</p>
//                                     </div>
//                                     <form className="row g-3 needs-validation" noValidate onSubmit={(e) => submitLoginForm(e)}>
//                                         <div className="col-12">
//                                             <label htmlFor="yourUsername" className="form-label">Email</label>
//                                             <div className="input-group has-validation">
//                                                 <span className="input-group-text" id="inputGroupPrepend">@</span>
//                                                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="username" className="form-control" id="yourUsername" required />
//                                                 <div className="invalid-feedback">Please enter your username.</div>
//                                             </div>
//                                         </div>
//                                         <div className="col-12">
//                                             <label htmlFor="yourPassword" className="form-label">Password</label>
//                                             <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control" id="yourPassword" required />
//                                             <div className="invalid-feedback">Please enter your password!</div>
//                                         </div>
//                                         {/* <div className="col-12">
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
//                                                 <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//                                             </div>
//                                         </div> */}
//                                         <div className="col-12">
//                                             <button className="btn btn-primary w-100" type="submit">Login</button>
//                                         </div>
//                                         <div className="col-12">
//                                             <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
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

// export default Login;
