"use client";
import {useState} from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm(){
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [message,setMessage]=useState("");
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();setStatus("sending");setMessage("");
    const form=event.currentTarget;
    const values=Object.fromEntries(new FormData(form).entries());
    try{
      const result=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});
      const body=await result.json() as {ok?:boolean;error?:string};
      if(!result.ok||!body.ok){setStatus("error");setMessage(body.error??"Neizdevās nosūtīt pieteikumu");return;}
      form.reset();setStatus("sent");setMessage("Pieteikums ir nosūtīts. Sazināsimies ar tevi pēc iespējas drīz.");
    }catch{setStatus("error");setMessage("Savienojuma kļūda — pieteikums nav nosūtīts.");}
  }
  return <form className={styles.form} onSubmit={submit}>
    <div className={styles.twoCols}>
      <label>Vārds <input name="name" required minLength={2} maxLength={120} autoComplete="name" placeholder="Tavs vārds"/></label>
      <label>E-pasts <input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="vards@uznemums.lv"/></label>
    </div>
    <div className={styles.twoCols}>
      <label>Uzņēmums <input name="business" maxLength={180} autoComplete="organization" placeholder="Uzņēmuma nosaukums (nav obligāti)"/></label>
      <label>Kas tevi interesē <select name="service" defaultValue=""><option value="">Izvēlies pakalpojumu</option><option>Mājaslapas izstrāde</option><option>E-komercija</option><option>SEO</option><option>UI/UX dizains</option><option>Mājaslapas uzlabošana</option><option>Cits</option></select></label>
    </div>
    <label>Īsi par projektu <textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="Kas nepieciešams un kāds ir mērķis?"/></label>
    <label className={styles.honeypot} aria-hidden="true">Website <input name="website" tabIndex={-1} autoComplete="off"/></label>
    <label className={styles.consent}><input type="checkbox" required/>Piekrītu, ka norādītos datus izmantos saziņai par manu pieteikumu</label>
    <button type="submit" className={styles.submit} disabled={status==="sending"}>{status==="sending"?"Nosūtām…":"Nosūtīt pieteikumu"}</button>
    <p className={styles.status} role="status" aria-live="polite">{message}</p>
  </form>;
}
