import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import DashboardPage from "./components/DashboardPage"
import ModuleContent from "./components/ModuleContent"
import DicasPage from "./components/DicasPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/module/:id" element={<ModuleContent />} />
        <Route path="/dicas" element={<DicasPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

