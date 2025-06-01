
import { Routes, Route, Navigate } from "react-router-dom"
import RegisterPage from "./app/Pages/register-page"
import LoginPage from "./app/Pages/login-page"
import Page from "./app/Pages/dashboard"
import TableContent from "./components/ui/table-content"
import  CourseGrid  from "./components/ui/program-card"
import CalendarView from "./components/ui/event"
import Groups from "./components/ui/group"
import DashboardHome from "./components/ui/DashboardHome"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Page/>}>
      <Route index element={<DashboardHome />} />
      <Route path = "/dashboard/users" element={<TableContent/>}/>
      <Route path = "/dashboard/programs" element={<CourseGrid/>}/>
      <Route path = "/dashboard/events" element={<CalendarView/>}/>
      <Route path = "/dashboard/groups" element={<Groups/>}/>


      </Route>
    </Routes> 
  )
}

export default App
