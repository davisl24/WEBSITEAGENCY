const issues = [
  {
    icon: "clarity",
    title: "Visitors do not understand your offer",
    action: "We organise services and the key information",
    benefit: "Visitors understand your services faster"
  },
  {
    icon: "mobile",
    title: "Important details are hard to find on mobile",
    action: "We simplify mobile structure and navigation",
    benefit: "Important information is easy to find on mobile"
  },
  {
    icon: "contact",
    title: "Visitors do not know what to do next",
    action: "We highlight one clear enquiry or contact action",
    benefit: "Customers can get in touch more easily"
  }
];

function ProblemIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {type === "clarity" && <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h7M7 17h4" /></>}
      {type === "mobile" && <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>}
      {type === "contact" && <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 10h8M8 13h5" /></>}
    </svg>
  );
}

export default function ValueShowcase() {
  return (
    <section className="value-section kestrel-problems-section kestrel-problems-cards kestrel-problems-v3" aria-labelledby="problems-title">
      <div className="value-inner">
        <div className="kestrel-problems-heading">
          <h2 id="problems-title">Common problems</h2>
        </div>
        <div className="kestrel-problems-list">
          {issues.map(item => (
            <article className="kestrel-issue-card" key={item.title}>
              <div className="kestrel-v3-issue-head">
                <span className="kestrel-v3-icon"><ProblemIcon type={item.icon} /></span>
                <h3>{item.title}</h3>
              </div>
              <div className="kestrel-v3-detail">
                <span className="kestrel-v3-label">What we do</span>
                <p>{item.action}</p>
              </div>
              <div className="kestrel-v3-detail kestrel-v3-benefit">
                <span className="kestrel-v3-label">Client benefit</span>
                <p>{item.benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
