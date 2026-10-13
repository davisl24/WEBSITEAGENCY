import KestrelHeader from "../components/KestrelHeader";
import KestrelFooter from "../components/KestrelFooter";
import {lvMetadataAlternates} from "../lib/localizedSeo";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import type {Metadata} from "next";

export const metadata:Metadata={
  alternates:lvMetadataAlternates("contact"),
  title:"Kontakti | Kestrel",
  description:"Apraksti savu projektu un nosūti pieteikumu Kestrel. Google Meet rezervācija pieejama pēc kalendāra pieslēgšanas."
};

function bookingLink(){
  const raw=process.env.CONTACT_GOOGLE_BOOKING_URL;
  if(!raw)return null;
  try{
    const url=new URL(raw);
    return url.protocol==="https:"&&["calendar.app.google","calendar.google.com"].includes(url.hostname)?url.href:null;
  }catch{return null;}
}

export default function ContactPage(){
  const url=bookingLink();
  return <main className={`service-page contact-page ${styles.page}`}>
    <KestrelHeader active="contact"/>
    <section className={styles.hero} aria-labelledby="contact-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h1 id="contact-title">Pastāsti par savu projektu</h1>
          <p>Īsi apraksti, kas nepieciešams. Pārskatīsim pieteikumu un sazināsimies par nākamo soli.</p>
          <div className={styles.meeting}>
            <h2>Labāk izrunāt videozvanā?</h2>
            <p>Ja jau esi gatavs sarunai, vari izvēlēties laiku Google kalendārā.</p>
            {url?<a href={url} target="_blank" rel="noopener noreferrer">Rezervēt Google Meet sarunu ↗</a>:<p className={styles.notConfigured}>Google Meet rezervācija pašlaik vēl nav pieslēgta</p>}
          </div>
        </div>
        <div className={styles.formWrap}>
          <h2>Nosūtīt pieteikumu</h2>
          <ContactForm/>
        </div>
      </div>
    </section>
    <KestrelFooter/>
  </main>;
}
