import Badge from "../Badge/Badge";
import "./BromeliadCard.css";

const STATUS = {
  floracao: { label: "Em floração", tone: "accent" },
  vegetativo: { label: "Vegetativo", tone: "gold" },
  repouso: { label: "Em repouso", tone: "muted" },
};

export default function BromeliadCard({ bromeliad }) {
  const status = STATUS[bromeliad.status];

  return (
    <article className="bromeliad-card surface">
      <div
        className="bromeliad-card__photo"
        style={{ backgroundColor: bromeliad.placeholderColor }}
        role="img"
        aria-label={`Foto de ${bromeliad.commonName}`}
      />

      <div className="bromeliad-card__body">
        <Badge tone={status.tone}>{status.label}</Badge>

        <h3 className="bromeliad-card__name">{bromeliad.commonName}</h3>
        <p className="bromeliad-card__scientific">{bromeliad.scientificName}</p>

        <span className="bromeliad-card__code">{bromeliad.accessionCode}</span>
      </div>
    </article>
  );
}
