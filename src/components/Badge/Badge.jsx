import "./Badge.css";

/**
 * Pílula de status reutilizável — usada hoje no status da bromélia
 * (floração/vegetativo/repouso), e pensada para servir também o role
 * do usuário e o tipo de ação no log de atividade, sem duplicar a
 * lógica de cor em cada tela nova.
 *
 * tone: "accent" | "gold" | "muted"
 */
export default function Badge({ children, tone = "muted" }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
