import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type BenchmarkRow = {
  contrast: string;
  status: string;
  vertex?: string;
  parcel?: string;
  late?: string;
  final?: string;
  majority?: string;
};

type VisualizationCard = {
  title: string;
  description: string;
  image: string;
};

const benchmarkRows: BenchmarkRow[] = [
  {
    contrast: "contradiction_vs_consistency_paired",
    status: "weak / deprioritized",
    vertex: "0.40",
    parcel: "0.50",
    late: "0.50",
    final: "0.40",
  },
  {
    contrast: "expected_vs_unexpected_paired",
    status: "stable",
    vertex: "0.80",
    parcel: "0.90",
    late: "0.90",
    final: "0.80",
  },
  {
    contrast: "cause_effect_valid_vs_invalid_paired",
    status: "stable",
    vertex: "0.70",
    parcel: "0.80",
    late: "0.50",
    final: "0.40",
    majority: "0.70",
  },
  {
    contrast: "approach_vs_static_paired",
    status: "pending",
  },
];

const visualizationCards: VisualizationCard[] = [
  {
    title: "Semantic contrast dashboard",
    description: "A compact view of static, parcel, and temporal benchmark results by contrast.",
    image: "assets/screenshots/semantic-dashboard.svg",
  },
  {
    title: "Brain activity visualizer",
    description: "Parcel-level predicted response summaries for region-oriented interpretation.",
    image: "assets/screenshots/brain-visualizer.svg",
  },
  {
    title: "Timeline view",
    description: "Segment-by-segment response trajectories for stimulus-level analysis.",
    image: "assets/screenshots/timeline-view.svg",
  },
  {
    title: "Section signal view",
    description: "A sectioned report view for inspecting contrast-specific signal changes.",
    image: "assets/screenshots/section-signal.svg",
  },
  {
    title: "Variant comparison view",
    description: "Side-by-side comparisons across feature spaces, signatures, and scoring modes.",
    image: "assets/screenshots/variant-comparison.svg",
  },
];

function App() {
  return (
    <main>
      <Hero />
      <Overview />
      <BenchmarkSnapshot />
      <Visualizations />
      <Method />
      <Privacy />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroGrid">
        <div className="heroCopy">
          <p className="eyebrow">Artificial Semantic Neural Evaluation</p>
          <h1>ASNE</h1>
          <p className="subtitle">
            A benchmark and visualization framework for comparing semantic stimulus responses across
            LLMs, brain-inspired feature spaces, and contrastive evaluation tasks.
          </p>
          <div className="buttonRow" aria-label="Primary navigation">
            <a className="button primary" href="#reports">
              View Reports
            </a>
            <a className="button" href="#visualizations">
              View Visualizations
            </a>
            <a className="button" href="mailto:hshim029@ucr.edu">
              Contact
            </a>
          </div>
        </div>
        <div className="heroPanel" aria-label="ASNE benchmark summary">
          <div className="panelHeader">
            <span>v0.3-lite snapshot</span>
            <span>Text/TTS semantic contrasts</span>
          </div>
          <div className="metricStack">
            <Metric label="Strongest contrast" value="Expected / unexpected" />
            <Metric label="Parcel top-1" value="0.90" />
            <Metric label="Feature spaces" value="Vertex + HCP-MMP parcel" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Overview() {
  return (
    <section className="section" id="overview">
      <div className="sectionHeader">
        <p className="eyebrow">Overview</p>
        <h2>Semantic contrast evaluation for model and brain-inspired response spaces.</h2>
      </div>
      <div className="twoColumn">
        <p>
          ASNE evaluates controlled semantic contrasts by comparing predicted response signatures
          across paired stimulus sets. The project is designed for research-style iteration:
          generate stimuli, extract response features, compare feature spaces, and inspect the
          resulting signal with static and temporal reports.
        </p>
        <ul className="contrastList">
          <li>contradiction vs consistency</li>
          <li>expected vs unexpected</li>
          <li>cause/effect valid vs invalid</li>
          <li>approach vs static</li>
        </ul>
      </div>
    </section>
  );
}

function BenchmarkSnapshot() {
  return (
    <section className="section" id="reports">
      <div className="sectionHeader">
        <p className="eyebrow">Benchmark Snapshot</p>
        <h2>v0.3-lite separates some semantic contrasts more reliably than others.</h2>
      </div>
      <div className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>Contrast</th>
              <th>Status</th>
              <th>Vertex</th>
              <th>Parcel</th>
              <th>Late</th>
              <th>Final</th>
              <th>Majority</th>
            </tr>
          </thead>
          <tbody>
            {benchmarkRows.map((row) => (
              <tr key={row.contrast}>
                <td>
                  <code>{row.contrast}</code>
                </td>
                <td>
                  <span className={`status ${statusClass(row.status)}`}>{row.status}</span>
                </td>
                <td>{row.vertex ?? "n/a"}</td>
                <td>{row.parcel ?? "n/a"}</td>
                <td>{row.late ?? "n/a"}</td>
                <td>{row.final ?? "n/a"}</td>
                <td>{row.majority ?? "n/a"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note">
        Scores are prototype benchmark snapshots from selected ASNE v0.3-lite runs. They are useful
        for research triage, not production accuracy claims.
      </p>
    </section>
  );
}

function statusClass(status: string) {
  if (status.includes("stable")) return "stable";
  if (status.includes("pending")) return "pending";
  return "weak";
}

function Visualizations() {
  return (
    <section className="section" id="visualizations">
      <div className="sectionHeader">
        <p className="eyebrow">Visualizations</p>
        <h2>Report views designed for semantic and temporal inspection.</h2>
      </div>
      <div className="cardGrid">
        {visualizationCards.map((card) => (
          <article className="vizCard" key={card.title}>
            {/* TODO: Replace placeholder screenshots in public/assets/screenshots with exported ASNE report captures. */}
            <img src={card.image} alt={`${card.title} placeholder`} />
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    "Stimulus set",
    "Model / brain feature extraction",
    "Contrast pair evaluation",
    "Feature-space comparison",
    "Report + visualization output",
  ];

  return (
    <section className="section" id="method">
      <div className="sectionHeader">
        <p className="eyebrow">Method</p>
        <h2>A compact pipeline for contrastive response analysis.</h2>
      </div>
      <div className="pipeline">
        {steps.map((step, index) => (
          <div className="pipelineStep" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <p className="methodCopy">
        ASNE compares response signatures across raw vertex-level vectors, HCP-MMP parcel summaries,
        and segment-level temporal trajectories. The current public showcase focuses on selected
        reports and visual outputs rather than private implementation details.
      </p>
    </section>
  );
}

function Privacy() {
  return (
    <section className="section privacy" id="privacy">
      <div>
        <p className="eyebrow">Privacy / Availability</p>
        <h2>Public showcase, private active-development core.</h2>
      </div>
      <p>
        The core ASNE repository is private while under active development. This page shares selected
        reports, benchmark snapshots, and visual outputs for portfolio and research showcase purposes.
      </p>
      {/* TODO: Add public links to exported reports after reviewing each artifact for private-path metadata. */}
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <strong>Hikaru Shimada</strong>
      <span>UC Riverside CS</span>
      <span>AI systems / semantic evaluation / brain-inspired modeling</span>
    </footer>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
