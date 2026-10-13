export default function KestrelEditorialFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-wordmark-block">
            <a href="/" className="footer-wordmark">Kestrel</a>
            <p className="footer-statement">Mājaslapas ar skaidru struktūru un pārdomātu dizainu.</p>
          </div>
          <div className="footer-links">
            <div>
              <span>Navigācija</span>
              <a href={home ? "#services" : "/#services"}>Pakalpojumi</a>
              <a href={home ? "#process" : "/#process"}>Process</a>
              <a href="/par-mums">Par mums</a>
              <a href="/kontakti">Kontakti</a>
            </div>
            <div>
              <span>Saziņa</span>
              <a className="footer-contact-link" href="/kontakti">
                Pieteikt sarunu <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kestrel</span>
        </div>
      </div>
    </footer>
  );
}
