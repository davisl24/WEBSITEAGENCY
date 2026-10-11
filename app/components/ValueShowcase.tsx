const issues = [
  {
    title: "Klienti nesaprot jūsu piedāvājumu",
    impact: "Ja pakalpojumi nav skaidri, apmeklētājs var aiziet, nesazinoties ar jums",
    solution: "Uzreiz parādām, ko piedāvājat un kam tas ir paredzēts"
  },
  {
    title: "Telefonā ir grūti atrast vajadzīgo",
    impact: "Apmeklētājam jāmeklē cenas, pakalpojumi vai kontaktinformācija",
    solution: "Sakārtojam lapu, lai svarīgākais būtu ātri atrodams arī telefonā"
  },
  {
    title: "Interesents nezina, ko darīt tālāk",
    impact: "Pat ieinteresēts klients var nepieteikties, ja nākamais solis nav skaidrs",
    solution: "Izceļam vienkāršu veidu, kā pieteikties vai sazināties"
  }
];

export default function ValueShowcase() {
  return (
    <section className="value-section kestrel-problems-section kestrel-problems-cards" aria-labelledby="problems-title">
      <div className="value-inner">
        <div className="kestrel-problems-heading">
          <h2 id="problems-title">Kas traucē mājaslapai piesaistīt klientus?</h2>
          <p>Kur pazūd klientu interese un kā to novēršam</p>
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
