import { Routes, Route, Navigate } from "react-router-dom"
import RegisterPage from "./app/Pages/register-page"
import LoginPage from "./app/Pages/login-page"
import AdminDashboard from "./app/Pages/admin-dashboard"
import StudentDashboard from "./app/Pages/student-dashboard"
import NotFound from "./app/Pages/not-found"
import TableContent from "./components/ui/table-content"
import CourseGrid from "./components/ui/program-card"
import { PrivateRoute } from "./components/PrivateRoute"
import UpdateUser from "./components/ui/UpdateUser";


function App() {
  return (
    <Routes>
            {/* Redirection racine vers login */}
      <Route path="/" element={<Navigate to="/login" />} />

            {/* Pages publiques */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard étudiant */}
      <Route
        path="/student/dashboard"
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </PrivateRoute>
        }
      >
        <Route path="programs" element={<CourseGrid />} />
      </Route>

      {/* Dashboard admin */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      >
        <Route path="users" element={<TableContent />} />
        <Route path="programs" element={<CourseGrid />} />
        <Route path="users/:id/edit" element={<UpdateUser />} />

        {/* <Route path="events" element={<EventsPage />} /> 
        <Route path="groups" element={<GroupsPage />} />  */}

      </Route>

      {/* Interdire /dashboard direct */}
      <Route path="/dashboard" element={<NotFound />} />

      {/* Route non trouvée */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

