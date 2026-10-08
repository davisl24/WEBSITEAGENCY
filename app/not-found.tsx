export default function NotFound() {
  return (
    <main className="service-page" style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "120px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 650 }}>
        <p className="service-page-kicker">404 — Lapa nav atrasta</p>
        <h1 style={{ fontSize: "clamp(44px, 7vw, 90px)", lineHeight: 1.06, letterSpacing: "-.06em", margin: "18px 0 24px" }}>Šeit nav meklētās lapas.</h1>
        <p style={{ opacity: .7, lineHeight: 1.7, margin: "0 0 34px" }}>Iespējams, adrese ir mainījusies. Vari atgriezties sākumlapā vai apskatīt mūsu pakalpojumus.</p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
          <a className="button button-primary" href="/">Uz sākumlapu</a>
          <a className="button button-primary" href="/#services">Skatīt pakalpojumus</a>
        </div>
      </div>
    </main>
  );
}
