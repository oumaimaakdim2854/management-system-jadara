
// import RegisterPage from './app/Pages/register-page'
// import LoginPage from "./app/Pages/login-page"

// function App() {
//   return (
//     <>
//       <div>
//         <RegisterPage/>
//         <LoginPage/>
//       </div>
//     </>
//   )
// }

// export default App

import { Routes, Route, Navigate } from "react-router-dom"
import RegisterPage from "./app/Pages/register-page"
import LoginPage from "./app/Pages/login-page"
import Page from "./app/Pages/dashboard"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Page/>}/>
    </Routes> 
  )
}

export default App
