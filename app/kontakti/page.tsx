import KestrelHeader from "../components/KestrelHeader";
import KestrelFooter from "../components/KestrelFooter";
import KestrelInquiryForm from "../components/KestrelInquiryForm";
import BookingCalendarDemo from "../components/BookingCalendarDemo";
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

      </div>
      <section className={styles.calendarSection} aria-labelledby="meet-title">
        <div className={styles.calendarCopy}>
          <h2 id="meet-title">Vēlies izrunāt projektu?</h2>
          <p>Ja ērtāk ir izrunāt ieceri, vari izvēlēties 15 minūšu Google Meet sarunu. Zemāk redzams tikai kalendāra dizaina piemērs, nevis īsta pieejamība.</p>
          {bookingUrl
            ? <a className={styles.meetLink} href={bookingUrl} target="_blank" rel="noopener noreferrer">Atvērt rezervācijas kalendāru <span aria-hidden="true">↗</span></a>
            : <p className={styles.noBooking}>Rezervācijas saite vēl nav pieslēgta. Pagaidām izmanto pieteikuma formu augstāk.</p>}
          <div className={styles.meetNote}>15 minūtes · Google Meet · bez saistībām</div>
        </div>
        <BookingCalendarDemo/>
      </section>
    </div>
    <KestrelFooter />
  </main>;
}
