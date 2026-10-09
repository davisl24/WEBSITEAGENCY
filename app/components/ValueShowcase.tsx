const issues = [
  {
    title: "Piedāvājums nav saprotams",
    impact: "Apmeklētājam jāmeklē, ko uzņēmums piedāvā",
    solution: "Skaidra pakalpojumu struktūra un galvenā informācija",
    icon: "clarity"
  },
  {
    title: "Lapa nav ērta telefonā",
    impact: "Grūti atrast informāciju un izmantot pogas",
    solution: "Pārdomāts izkārtojums mobilajām ierīcēm",
    icon: "mobile"
  },
  {
    title: "Pieteikšanās ir sarežģīta",
    impact: "Nav skaidrs, kā sazināties vai pieteikt pakalpojumu",
    solution: "Viena viegli atrodama saziņas iespēja",
    icon: "contact"
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
              <div className="kestrel-issue-icon" aria-hidden="true">
                {item.icon === "clarity" && <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="4"/><path d="M10 12h12M10 17h8M10 22h5"/></svg>}
                {item.icon === "mobile" && <svg viewBox="0 0 32 32" fill="none"><rect x="10" y="3" width="12" height="26" rx="3"/><path d="M14 25h4M13 7h6"/></svg>}
                {item.icon === "contact" && <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="4"/><path d="m6 9 10 9L26 9"/></svg>}
              </div>
              <h3>{item.title}</h3>
              <p className="kestrel-issue-impact">{item.impact}</p>
              <div className="kestrel-issue-solution">
                <span>Risinājums</span>
                <p>{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
