
import './App.css'
import RegisterPage from './app/register/register-page'
import LoginPage from "./login/login-page"
import Page from './app/dashboard/page'
import { ThemeProvider } from "@/components/providers/theme-provider"

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path ="/login"
            element={ <LoginPage/>}
            />
            <Route 
            path ="/register"
            element={<RegisterPage/>}
            />

        </Routes>
      </Router>

          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page/>
    </ThemeProvider>
      
    </>
    
  )
}

export default App
