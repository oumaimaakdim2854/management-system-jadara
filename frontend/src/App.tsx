
// import './App.css'
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
