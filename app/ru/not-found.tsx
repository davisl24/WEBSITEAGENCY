export default function NotFound() {
  return <main lang="ru" className="service-page" style={{minHeight:"100svh",display:"grid",placeItems:"center",padding:"120px 24px",textAlign:"center"}}>
    <div style={{maxWidth:650}}>
      <p className="service-page-kicker">404</p>
      <h1 style={{fontSize:"clamp(44px, 7vw, 90px)",lineHeight:1.06,letterSpacing:"-.06em",margin:"18px 0 24px"}}>Такой страницы нет.</h1>
      <p style={{opacity:.7,lineHeight:1.7,margin:"0 0 34px"}}>Возможно, адрес изменился. Вернитесь на главную или посмотрите наши услуги.</p>
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:16}}>
        <a className="button button-primary" href="/ru">На главную</a>
        <a className="button button-primary" href="/ru/#services">Наши услуги</a>
      </div>
    </div>
  </main>;
}
