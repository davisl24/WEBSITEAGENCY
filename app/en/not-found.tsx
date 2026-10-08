export default function NotFound() {
  return <main lang="en" className="service-page" style={{minHeight:"100svh",display:"grid",placeItems:"center",padding:"120px 24px",textAlign:"center"}}>
    <div style={{maxWidth:650}}>
      <p className="service-page-kicker">404</p>
      <h1 style={{fontSize:"clamp(44px, 7vw, 90px)",lineHeight:1.06,letterSpacing:"-.06em",margin:"18px 0 24px"}}>This page doesn't exist.</h1>
      <p style={{opacity:.7,lineHeight:1.7,margin:"0 0 34px"}}>The address may have changed. Return to the home page or explore our services.</p>
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:16}}>
        <a className="button button-primary" href="/en">Back to home</a>
        <a className="button button-primary" href="/en/#services">Explore services</a>
      </div>
    </div>
  </main>;
}
