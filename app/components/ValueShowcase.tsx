const issues = [
  {
    problem: "Klients nesaprot piedāvājumu",
    impact: "Svarīgākais pazūd starp pārāk daudziem tekstiem un sadaļām",
    solution: "Izceļam svarīgāko un sakārtojam saturu"
  },
  {
    problem: "Lapa nav ērta telefonā",
    impact: "Teksti, pogas un navigācija apgrūtina vajadzīgās informācijas atrašanu",
    solution: "Pielāgojam lapu mobilajām ierīcēm"
  },
  {
    problem: "Nav skaidrs, kā pieteikties",
    impact: "Kontaktinformācija vai nākamā darbība ir grūti atrodama",
    solution: "Izveidojam skaidru ceļu līdz pieteikumam"
  }
];

export default function ValueShowcase() {
  return (
    <section className="value-section kestrel-problems-section" aria-labelledby="problems-title">
      <div className="value-inner">
        <div className="kestrel-problems-heading">
          <h2 id="problems-title">Kas traucē mājaslapai strādāt?</h2>
        </div>
        <div className="kestrel-problems-list">
          {issues.map((item, index) => (
            <div className="kestrel-problem-row" key={item.problem}>
              <span className="kestrel-problem-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="kestrel-problem-description">
                <h3>{item.problem}</h3>
              </div>
              <div className="kestrel-problem-solution">
                <span aria-hidden="true" className="kestrel-problem-arrow">→</span>
                <p>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
