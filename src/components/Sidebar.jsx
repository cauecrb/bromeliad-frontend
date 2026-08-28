import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const NAV_ITEMS = [
  { label: "Painel", to: "/" },
  { label: "Cadastrar bromélia", to: "/bromelias/nova" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <BromeliadMark />
        <span>Bromeliário</span>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`sidebar__link ${location.pathname === item.to ? "is-active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__footer-label">Coleção</span>
        <span className="sidebar__footer-value">Laboratório de Bromélias</span>
      </div>
    </aside>
  );
}

/* Marca do sistema: pétala estilizada em traço único — usada também
   como o elemento de assinatura repetido nos cards (ver BromeliadCard). */
function BromeliadMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 2C9 6 6 11 6 15.5C6 20.5 9.5 24 14 24C18.5 24 22 20.5 22 15.5C22 11 19 6 14 2Z"
        fill="var(--color-accent-soft)"
      />
      <path
        d="M14 6C11.5 9 10 12.5 10 15.5C10 18.5 11.8 21 14 21C16.2 21 18 18.5 18 15.5C18 12.5 16.5 9 14 6Z"
        fill="var(--color-accent)"
      />
      <circle cx="14" cy="14" r="2" fill="var(--color-gold)" />
    </svg>
  );
}
