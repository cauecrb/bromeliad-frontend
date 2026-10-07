import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Dashboard from "./pages/Dashboard";
import NewBromeliad from "./pages/NewBromeliad";
import Login from "./pages/Login";
import { getToken } from "./api/client";
import { logout } from "./api/auth";

export default function App() {
  // Checa se já existe token salvo (ex: usuário deu F5 na página) —
  // assim não força login de novo toda hora sem necessidade.
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  function handleLogout() {
    logout();
    setIsAuthenticated(false);
  }

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div>
        <TopBar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bromelias/nova" element={<NewBromeliad />} />
        </Routes>
      </div>
    </div>
  );
}
