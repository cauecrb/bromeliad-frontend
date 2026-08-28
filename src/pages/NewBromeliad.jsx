import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { createBromeliad } from "../api/bromeliads";
import { ApiError } from "../api/client";
import "./NewBromeliad.css";

// Campos que já existem no schema do backend. `extra_info` (o campo
// JSON flexível) fica de fora do formulário por enquanto — o formato
// definitivo ainda vai ser refinado, então não faz sentido pedir pro
// usuário digitar JSON na mão ainda.
const INITIAL_STATE = {
  genus: "",
  specific_epithet: "",
  infraspecific_epithet: "",
  scientific_name_authorship: "",
  family: "Bromeliaceae",
  common_name: "",
  hybrid_parentage: "",
  accession_code: "",
  acquisition_date: "",
  source: "",
};

export default function NewBromeliad() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(field) {
    return (event) => setForm({ ...form, [field]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Campos opcionais vazios viram `undefined` em vez de string vazia,
      // pra bater com o schema (que espera string ou nulo, não "").
      const payload = Object.fromEntries(
        Object.entries(form).map(([key, value]) => [key, value === "" ? undefined : value])
      );
      await createBromeliad(payload);
      // A tela de consulta individual (/bromelias/:id) ainda não existe
      // — é o próximo módulo. Por enquanto volta pro Dashboard.
      navigate("/");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Não foi possível conectar ao servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="new-bromeliad">
      <header className="new-bromeliad__header">
        <h1>Cadastrar bromélia</h1>
        <p>Preencha a identidade taxonômica e o registro de acesso.</p>
      </header>

      <form className="new-bromeliad__form surface" onSubmit={handleSubmit}>
        <fieldset className="new-bromeliad__section">
          <legend>Identidade taxonômica</legend>

          <div className="new-bromeliad__row">
            <Input
              id="genus"
              label="Gênero *"
              value={form.genus}
              onChange={handleChange("genus")}
              required
            />
            <Input
              id="specific_epithet"
              label="Epíteto específico"
              value={form.specific_epithet}
              onChange={handleChange("specific_epithet")}
            />
          </div>

          <div className="new-bromeliad__row">
            <Input
              id="infraspecific_epithet"
              label="Epíteto infraespecífico"
              value={form.infraspecific_epithet}
              onChange={handleChange("infraspecific_epithet")}
            />
            <Input
              id="scientific_name_authorship"
              label="Autoridade do nome"
              value={form.scientific_name_authorship}
              onChange={handleChange("scientific_name_authorship")}
            />
          </div>

          <div className="new-bromeliad__row">
            <Input
              id="family"
              label="Família"
              value={form.family}
              onChange={handleChange("family")}
            />
            <Input
              id="common_name"
              label="Nome popular"
              value={form.common_name}
              onChange={handleChange("common_name")}
            />
          </div>

          <Input
            id="hybrid_parentage"
            label="Parentagem (se for híbrido — ex: mãe × pai)"
            value={form.hybrid_parentage}
            onChange={handleChange("hybrid_parentage")}
          />
        </fieldset>

        <fieldset className="new-bromeliad__section">
          <legend>Registro de acesso</legend>

          <div className="new-bromeliad__row">
            <Input
              id="accession_code"
              label="Código de acesso *"
              value={form.accession_code}
              onChange={handleChange("accession_code")}
              required
            />
            <Input
              id="acquisition_date"
              label="Data de aquisição"
              type="date"
              value={form.acquisition_date}
              onChange={handleChange("acquisition_date")}
            />
          </div>

          <Input
            id="source"
            label="Origem / proveniência"
            value={form.source}
            onChange={handleChange("source")}
          />
        </fieldset>

        {error && <p className="new-bromeliad__error">{error}</p>}

        <Button type="submit" loading={loading}>
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
