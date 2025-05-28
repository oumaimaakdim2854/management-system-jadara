import Page from './app/dashboard/page'
import { ThemeProvider } from "@/components/providers/theme-provider"

<<<<<<< HEAD
import './App.css'
=======
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
import Page from "./app/Pages/dashboard"
>>>>>>> 30ba4a193dc8728e318b6118e90eb98597964c85

function App() {

  return (
<<<<<<< HEAD
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page/>
    </ThemeProvider>
    </>
=======
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Page/>}/>
    </Routes> 
>>>>>>> 30ba4a193dc8728e318b6118e90eb98597964c85
  )
}

export default App
