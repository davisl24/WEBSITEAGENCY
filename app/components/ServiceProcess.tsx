import RevealOnView from "./RevealOnView";
import styles from "./ServiceProcess.module.css";

const stages = [
  { title:"Izrunājam", description:"Precizējam mērķi, auditoriju un vajadzīgo darba apjomu" },
  { title:"Saskaņojam", description:"Vienojamies par saturu, risinājumu un nākamo soli" },
  { title:"Izstrādājam", description:"Izveidojam un pārbaudām saskaņoto risinājumu" },
  { title:"Publicējam", description:"Pārbaudām gatavo darbu un nododam lietošanai" },
];

export default function ServiceProcess() {
  return (
    <section className={styles.section} aria-labelledby="service-process-title">
      <h2 id="service-process-title">Kā strādājam</h2>
      <div className={styles.grid}>
        {stages.map((step,index) => (
          <RevealOnView className={styles.step} delay={index*110} key={step.title}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.icon} aria-hidden="true">
              {index===0 && <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="5"/><path d="M16 3v6M16 23v6M3 16h6M23 16h6"/></svg>}
              {index===1 && <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="3"/><path d="M11 11h11M11 16h11M11 21h7"/></svg>}
              {index===2 && <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24M13 16l-4 3 4 3M19 16l4 3-4 3"/></svg>}
              {index===3 && <svg viewBox="0 0 32 32" fill="none"><path d="M12 21l-1-7c3-6 8-9 15-9 0 7-3 12-9 15l-5 1Z"/><path d="M11 14l-5 1-2 5 7-1M18 21l-1 7-5 1 1-7M9 23l-3 3M24 9h.01"/></svg>}
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
