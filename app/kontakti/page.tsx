import KestrelHeader from "../components/KestrelHeader";
import KestrelFooter from "../components/KestrelFooter";
import KestrelInquiryForm from "../components/KestrelInquiryForm";
import { lvMetadataAlternates } from "../lib/localizedSeo";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: lvMetadataAlternates("contact"),
  title: "Kontakti | Kestrel",
  description: "Aizpildi projekta pieteikumu vai izvēlies sarunu, lai noskaidrotu piemērotāko mājaslapas risinājumu.",
};

const bookingUrl = process.env.NEXT_PUBLIC_KESTREL_BOOKING_URL?.trim();

export default function ContactPage() {
  return <main className="service-page contact-page">
    <KestrelHeader active="contact" />
    <div className={styles.contactWrap}>
      <div className={styles.contactIntro}>
        <h1>Pastāsti par savu projektu</h1>
        <p>Daži jautājumi palīdzēs saprast, kādu mājaslapu vēlies un ar ko būtu jēga sākt.</p>
      </div>
      <div className={styles.contactGrid}>
        <section className={styles.formPanel} aria-labelledby="inquiry-title">
          <h2 id="inquiry-title">Aizpildi pieteikumu</h2>
          <p className={styles.panelIntro}>Uzraksti īsi — detaļas varēsim precizēt sarunā.</p>
          <KestrelInquiryForm />
        </section>
        <aside className={styles.callPanel} aria-labelledby="meet-title">
          <h2 id="meet-title">Vēlies uzreiz izrunāt?</h2>
          <p>Ja projekts jau ir skaidrs, varam vienoties par 15 minūšu Google Meet sarunu.</p>
          {bookingUrl
            ? <a className={styles.meetLink} href={bookingUrl} target="_blank" rel="noopener noreferrer">Izvēlēties sarunas laiku <span aria-hidden="true">↗</span></a>
            : <p className={styles.noBooking}>Kalendāra rezervācija vēl nav pieslēgta. Laiku sarunai vienosimies pēc pieteikuma.</p>}
          <div className={styles.meetNote}>15 minūtes · Google Meet · bez saistībām</div>
        </aside>
      </div>
    </div>
    <KestrelFooter />
  </main>;
}
