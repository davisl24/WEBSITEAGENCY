const issues = [
  {
    title: "Nav skaidrs, ko uzņēmums piedāvā",
    impact: "Apmeklētājam jāmeklē būtiskākā informācija",
    solution: "Skaidri pakalpojumi un saprotama struktūra"
  },
  {
    title: "Mājaslapu ir grūti lietot telefonā",
    impact: "Informācija un svarīgās pogas nav ērti atrodamas",
    solution: "Ērta navigācija un pārdomāts mobilais izkārtojums"
  },
  {
    title: "Klientam nav skaidrs, kā pieteikties",
    impact: "Klients nezina, kur sazināties vai pieteikt pakalpojumu",
    solution: "Vienkārša un viegli atrodama saziņas iespēja"
  }
];

export default function ValueShowcase() {
  return (
    <section className="value-section kestrel-problems-section kestrel-problems-cards" aria-labelledby="problems-title">
      <div className="value-inner">
        <div className="kestrel-problems-heading">
          <h2 id="problems-title">Kas traucē mājaslapai strādāt?</h2>
          <p>Trīs biežas problēmas un kā mēs tās risinām</p>
        </div>
        <div className="kestrel-problems-list">
          {issues.map(item => (
            <article className="kestrel-issue-card" key={item.title}>
              <div className="kestrel-issue-copy">
                <h3>{item.title}</h3>
                <p className="kestrel-issue-impact">{item.impact}</p>
              </div>
              <div className="kestrel-issue-solution">
                <svg className="kestrel-solution-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="m4.5 10 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
