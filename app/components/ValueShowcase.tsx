const issues = [
  {
    title: "Piedāvājums nav saprotams",
    impact: "Apmeklētājam jāmeklē, ko uzņēmums piedāvā",
    solution: "Skaidra pakalpojumu struktūra un galvenā informācija"
  },
  {
    title: "Lapa nav ērta telefonā",
    impact: "Grūti atrast informāciju un izmantot pogas",
    solution: "Pārdomāts izkārtojums mobilajām ierīcēm"
  },
  {
    title: "Pieteikšanās ir sarežģīta",
    impact: "Nav skaidrs, kā sazināties vai pieteikt pakalpojumu",
    solution: "Viena viegli atrodama saziņas iespēja"
  }
];

export default function ValueShowcase() {
  return (
    <section className="value-section kestrel-problems-section kestrel-problems-cards" aria-labelledby="problems-title">
      <div className="value-inner">
        <div className="kestrel-problems-heading">
          <h2 id="problems-title">Kas traucē mājaslapai strādāt?</h2>
        </div>
        <div className="kestrel-problems-list">
          {issues.map(item => (
            <article className="kestrel-issue-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="kestrel-issue-impact">{item.impact}</p>
              <div className="kestrel-issue-solution">
                <p>{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
