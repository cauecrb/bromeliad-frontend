import StatCard from "../components/StatCard/StatCard";
import BromeliadCard from "../components/BromeliadCard/BromeliadCard";
import { mockBromeliads, mockStats } from "../data/mockData";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Bom dia, Cauê</h1>
        <p>Aqui está o estado atual da sua coleção.</p>
      </header>

      <section className="dashboard__stats">
        {mockStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="dashboard__catalog">
        <div className="dashboard__catalog-header">
          <h2>Catálogo</h2>
          <span className="dashboard__catalog-count">
            {mockBromeliads.length} plantas
          </span>
        </div>

        <div className="dashboard__grid">
          {mockBromeliads.map((bromeliad) => (
            <BromeliadCard key={bromeliad.id} bromeliad={bromeliad} />
          ))}
        </div>
      </section>
    </div>
  );
}
