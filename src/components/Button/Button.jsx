import "./Button.css";

/**
 * Botão reutilizável em todo o sistema. `variant`: "primary" | "secondary".
 * `loading` desabilita e troca o texto — usado em qualquer ação que
 * espera resposta da API (login, salvar cadastro, etc).
 */
export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled,
  ...buttonProps
}) {
  return (
    <button
      className={`button button--${variant}`}
      disabled={disabled || loading}
      {...buttonProps}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
