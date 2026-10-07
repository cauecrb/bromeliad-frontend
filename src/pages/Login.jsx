import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { login } from "../api/auth";
import { ApiError } from "../api/client";
import "./Login.css";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      onLoginSuccess();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Não foi possível conectar ao servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <form className="login__card surface" onSubmit={handleSubmit}>
        <h1 className="login__title">Bromeliário</h1>
        <p className="login__subtitle">Entre com sua conta para continuar</p>

        <Input
          id="email"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="login__error">{error}</p>}

        <Button type="submit" loading={loading}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
