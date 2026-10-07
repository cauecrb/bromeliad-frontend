import Button from "../Button/Button";
import "./TopBar.css";

export default function TopBar({ userName = "Cauê", role = "admin", onLogout }) {
  return (
    <header className="topbar">
      <input
        className="topbar__search"
        type="search"
        placeholder="Buscar por nome ou código de acesso..."
        aria-label="Buscar bromélia"
      />

      <div className="topbar__user">
        <span className="topbar__role">{role}</span>
        <div className="topbar__avatar" aria-hidden="true">
          {userName.charAt(0)}
        </div>
        <Button variant="secondary" onClick={onLogout}>
          Sair
        </Button>
      </div>
    </header>
  );
}
