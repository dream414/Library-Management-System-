import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Layout from "./components/layout/layout";

// Context
import { RequestProvider } from "./context/RequestContext";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

// Dashboards - ONLY 12
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import LibrarianDashboard from "./pages/dashboards/LibrarianDashboard";
import SuperAdminDashboard from "./pages/dashboards/SuperAdminDashboard";
import HODDashboard from "./pages/dashboards/HODDashboard";
import StaffDashboard from "./pages/dashboards/StaffDashboard";
import VisitorDashboard from "./pages/dashboards/VisitorDashboard";
import AccountantDashboard from "./pages/dashboards/AccountantDashboard";
import ResearcherDashboard from "./pages/dashboards/ResearcherDashboard";
import DigitalDashboard from "./pages/dashboards/DigitalDashboard";
import LibraryDashboard from "./pages/dashboards/LibraryDashboard";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RequestProvider>
          <BrowserRouter>
            <Routes>

              {/* PUBLIC PAGES */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />

              {/* 12 DASHBOARDS */}
              <Route path="/student" element={<Layout><StudentDashboard /></Layout>} />
              <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
              <Route path="/teacher" element={<Layout><TeacherDashboard /></Layout>} />
              <Route path="/librarian" element={<Layout><LibrarianDashboard /></Layout>} />
              <Route path="/superadmin" element={<Layout><SuperAdminDashboard /></Layout>} />
              <Route path="/hod" element={<Layout><HODDashboard /></Layout>} />
              <Route path="/staff" element={<Layout><StaffDashboard /></Layout>} />
              <Route path="/visitor" element={<Layout><VisitorDashboard /></Layout>} />
              <Route path="/accountant" element={<Layout><AccountantDashboard /></Layout>} />
              <Route path="/researcher" element={<Layout><ResearcherDashboard /></Layout>} />
              <Route path="/digital" element={<Layout><DigitalDashboard /></Layout>} />
              <Route path="/library" element={<Layout><LibraryDashboard /></Layout>} />

            </Routes>
          </BrowserRouter>
        </RequestProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}