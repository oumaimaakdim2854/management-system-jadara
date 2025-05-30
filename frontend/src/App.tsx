
import { Routes, Route, Navigate } from "react-router-dom"
import RegisterPage from "./app/Pages/register-page"
import LoginPage from "./app/Pages/login-page"
import Page from "./app/Pages/dashboard"
import TableContent from "./components/ui/table-content"
import  CourseGrid  from "./components/ui/program-card"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Page/>}>
      <Route path = "/dashboard/users" element={<TableContent/>}/>
      <Route path = "/dashboard/programs" element={<CourseGrid/>}/>
      </Route>
    </Routes> 
  )
}

export default App
