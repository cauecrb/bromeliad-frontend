import "./Input.css";

/**
 * Input reutilizável — pensado pra qualquer formulário do sistema
 * (login hoje, cadastro de bromélia depois), não só pra tela de login.
 * Recebe label, erro opcional, e repassa o resto das props pro <input>.
 */
export default function Input({ label, error, id, ...inputProps }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input id={id} className={`field__input ${error ? "has-error" : ""}`} {...inputProps} />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
