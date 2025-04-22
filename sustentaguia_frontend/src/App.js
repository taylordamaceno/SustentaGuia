import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import DashboardPage from "./components/DashboardPage"
import ModuleContent from "./components/ModuleContent"
import DicasPage from "./components/DicasPage"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useEffect } from 'react'

// Para obter um Client ID real, você precisa criar um projeto no Google Cloud Console:
// 1. Acesse https://console.cloud.google.com/
// 2. Crie um novo projeto
// 3. Configure a tela de consentimento OAuth
// 4. Crie credenciais OAuth 2.0 para aplicativo Web
// 5. Adicione http://localhost:3000 como URI autorizada de redirecionamento
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "SUBSTITUA_PELO_SEU_CLIENT_ID_REAL";

// Log para verificar o valor de CLIENT_ID
console.log('Google Client ID configurado:', GOOGLE_CLIENT_ID);

function App() {
  useEffect(() => {
    console.log('App montado. Google Client ID:', GOOGLE_CLIENT_ID);
  }, []);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
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
    </GoogleOAuthProvider>
  )
}

export default App

