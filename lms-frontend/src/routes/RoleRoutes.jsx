import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Dashboards
import AdminDashboard from "../pages/dashboards/AdminDashboard";
import StudentDashboard from "../pages/dashboards/StudentDashboard";
import TeacherDashboard from "../pages/dashboards/TeacherDashboard";
import LibrarianDashboard from "../pages/dashboards/LibrarianDashboard";
import GuestDashboard from "../pages/dashboards/GuestDashboard";
import HodDashboard from "../pages/dashboards/HODDashboard";
import StaffDashboard from "../pages/dashboards/StaffDashboard";
import ResearcherDashboard from "../pages/dashboards/ResearcherDashboard";
import AssistantDashboard from "../pages/dashboards/AssistantDashboard";
import AccountantDashboard from "../pages/dashboards/AccountantDashboard";
import VisitorDashboard from "../pages/dashboards/VisitorDashboard";
import SuperAdminDashboard from "../pages/dashboards/SuperAdminDashboard";

export default function RoleRoutes() {
  const { user } = useContext(AuthContext);

  // helper: protect routes
  const ProtectedRoute = ({ role, children }) => {
    if (!user) return <Navigate to="/login" />;
    if (user.role !== role && user.role !== "superadmin") {
      return <Navigate to="/unauthorized" />;
    }
    return children;
  };

  return (
    <Routes>

      {/* ADMIN */}
      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* STUDENT */}
      <Route
        path="/dashboard/student"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* TEACHER */}
      <Route
        path="/dashboard/teacher"
        element={
          <ProtectedRoute role="teacher">
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />

      {/* LIBRARIAN */}
      <Route
        path="/dashboard/librarian"
        element={
          <ProtectedRoute role="librarian">
            <LibrarianDashboard />
          </ProtectedRoute>
        }
      />

      {/* GUEST */}
      <Route
        path="/dashboard/guest"
        element={
          <ProtectedRoute role="guest">
            <GuestDashboard />
          </ProtectedRoute>
        }
      />

      {/* HOD */}
      <Route
        path="/dashboard/hod"
        element={
          <ProtectedRoute role="hod">
            <HodDashboard />
          </ProtectedRoute>
        }
      />

      {/* STAFF */}
      <Route
        path="/dashboard/staff"
        element={
          <ProtectedRoute role="staff">
            <StaffDashboard />
          </ProtectedRoute>
        }
      />

      {/* RESEARCHER */}
      <Route
        path="/dashboard/researcher"
        element={
          <ProtectedRoute role="researcher">
            <ResearcherDashboard />
          </ProtectedRoute>
        }
      />

      {/* ASSISTANT */}
      <Route
        path="/dashboard/assistant"
        element={
          <ProtectedRoute role="assistant">
            <AssistantDashboard />
          </ProtectedRoute>
        }
      />

      {/* ACCOUNTANT */}
      <Route
        path="/dashboard/accountant"
        element={
          <ProtectedRoute role="accountant">
            <AccountantDashboard />
          </ProtectedRoute>
        }
      />

      {/* VISITOR */}
      <Route
        path="/dashboard/visitor"
        element={
          <ProtectedRoute role="visitor">
            <VisitorDashboard />
          </ProtectedRoute>
        }
      />

      {/* SUPER ADMIN */}
      <Route
        path="/dashboard/superadmin"
        element={
          <ProtectedRoute role="superadmin">
            <SuperAdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}