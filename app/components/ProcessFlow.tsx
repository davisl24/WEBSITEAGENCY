import RevealOnView from "./RevealOnView";
import type { Language } from "../lib/localizedSeo";

const steps = [
  {
    title: "Mērķis",
    text: "Saprotam, ko pārdodam, kam un kādu darbību vēlamies no apmeklētāja",
    icon: "target",
  },
  {
    title: "Saturs",
    text: "Atlasām tikai to informāciju, kas palīdz klientam saprast un pieņemt lēmumu",
    icon: "content",
  },
  {
    title: "Izstrāde",
    text: "Uzbūvējam un pārbaudām lapu uz desktop un mobile",
    icon: "build",
  },
  {
    title: "Palaišana",
    text: "Palaižam lapu dzīvē un, ja vajag, turpinām ar uzturēšanu un uzlabojumiem",
    icon: "launch",
  },
];

export default function ProcessFlow({lang="lv"}:{lang?:Language}) {
  const translated={lv:steps,en:[
    {title:"Goal",text:"We clarify what the business offers, to whom and what visitors should do",icon:"target"},
    {title:"Content",text:"We select the information customers need to make a decision",icon:"content"},
    {title:"Development",text:"We build and check the site on desktop and mobile",icon:"build"},
    {title:"Launch",text:"We publish the site and agree on next steps if needed",icon:"launch"}
  ],ru:[
    {title:"Цель",text:"Определяем предложение, аудиторию и нужное действие посетителя",icon:"target"},
    {title:"Контент",text:"Оставляем информацию, которая помогает принять решение",icon:"content"},
    {title:"Разработка",text:"Создаём и проверяем сайт на компьютере и телефоне",icon:"build"},
    {title:"Запуск",text:"Публикуем сайт и при необходимости согласуем дальнейшие работы",icon:"launch"}
  ]}[lang];
  const heading=lang==="ru"?"Процесс":lang==="en"?"Process":"Kā strādājam";
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="process-head process-head-minimal"><h2 id="process-title">{heading}</h2></div>

        <div className="process-track">
          <span className="process-track-line" aria-hidden="true" />
          {translated.map((step, index) => (
            <RevealOnView
              className="process-step"
              delay={120 + index * 90}
              key={step.title}
            >
              <span className="process-step-dot" aria-hidden="true" />
              <span className="process-step-symbol" aria-hidden="true">
                {step.icon === "target" && <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" /><circle cx="16" cy="16" r="5" /><path d="M16 3v6M16 23v6M3 16h6M23 16h6" /></svg>}
                {step.icon === "content" && <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="3" /><path d="M11 11h11M11 16h11M11 21h7" /></svg>}
                {step.icon === "build" && <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3" /><path d="M4 12h24M13 16l-4 3 4 3M19 16l4 3-4 3" /></svg>}
                {step.icon === "launch" && <svg viewBox="0 0 32 32" fill="none"><path d="M12 21l-1-7c3-6 8-9 15-9 0 7-3 12-9 15l-5 1Z" /><path d="m17 15 0 0M11 14l-5 1-2 5 7-1M18 21l-1 7-5 1 1-7M9 23l-3 3M24 9h.01" /></svg>}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
