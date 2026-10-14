type Props={lang?:"lv"|"en"|"ru"};
export default function BookingCalendarDemo({lang="lv"}:Props){
  const words={
    lv:{title:"Oktobris 2026",demo:"Dizaina demonstrācija — nav reālu brīvu laiku",sample:"Laiki ir tikai piemērs"},
    en:{title:"October 2026",demo:"Design demo — no real availability",sample:"Example times only"},
    ru:{title:"Октябрь 2026",demo:"Демо дизайна — не реальные свободные места",sample:"Время указано для примера"}
  }[lang];
  const days=Array.from({length:35},(_,i)=>i>=3&&i<34?i-2:null);
  return <div className="kestrel-calendar-demo" aria-label={words.demo}>
    <div className="calendar-demo-top"><strong>{words.title}</strong><span>DEMO</span></div>
    <div className="calendar-demo-weekdays">{["P","O","T","C","P","S","Sv"].map((day,i)=><span key={i}>{day}</span>)}</div>
    <div className="calendar-demo-days">{days.map((day,i)=><span key={i} className={day===14?"calendar-demo-selected":undefined}>{day??""}</span>)}</div>
    <div className="calendar-demo-times"><span>10:00</span><span>11:30</span><span>14:00</span></div>
    <p>{words.demo}. {words.sample}.</p>
  </div>;
}
