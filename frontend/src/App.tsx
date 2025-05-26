
import './App.css'
import RegisterPage from './app/register/register-page'
import LoginPage from "./login/login-page"
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
    </>
  )
}

export default App
