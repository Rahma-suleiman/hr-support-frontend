import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomeLayout from '../pages/HomeLayout';
// import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import Attendance from '../pages/Attendance';
import Employees from '../pages/Employees';
import { LeaveRequest } from '../pages/LeaveRequest';
import Payroll from '../pages/Payroll';

const HrRoutes = createBrowserRouter(
    createRoutesFromElements(
        <>

            {/* Protected routes (only HR_MANAGER or ADMIN can access) */}
            <Route path="" element={<HomeLayout />}> 
                <Route
                    path="/"
                    element={
                        <Dashboard />
                    }
                />
                <Route
                    path="/attend"
                    element={
                        <Attendance />
                    }
                />
                <Route
                    path="/payroll"
                    element={
                        <Payroll />
                    }
                />
                {/* <Route
                    path="/perform"
                    element={
                        <Performance />
                    }
                /> */}
                <Route
                    path="/leave"
                    element={
                        <LeaveRequest />
                    }
                />
                <Route
                    path="/employee"
                    element={
                            <Employees />
                    }
                />
                {/* <Route
                    path="/employee"
                    element={
                        <ProtectedRoute allowedRoles={['HR_MANAGER', 'ADMIN']}>
                            <Employees />
                        </ProtectedRoute>
                    }
                /> */}
            </Route>

        </>
    )
);

export default HrRoutes;
