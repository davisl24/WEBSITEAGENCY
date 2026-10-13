"use client";

import { useState, type FormEvent } from "react";

const recipient = process.env.NEXT_PUBLIC_KESTREL_CONTACT_EMAIL?.trim() ?? "";

type Status = "idle" | "copied" | "error";
export default function KestrelInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [
      "Jauns mājaslapas projekta pieteikums",
      `Vārds: ${name}`,
      `E-pasts: ${email}`,
      `Uzņēmums: ${company || "Nav norādīts"}`,
      `Interesē: ${service}`,
      "",
      "Projekta apraksts:",
      message,
    ].join("\n");

    if (recipient) {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent("Kestrel — projekta pieteikums")}&body=${encodeURIComponent(body)}`;
      return;
    }
    try {
      await navigator.clipboard.writeText(body);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return <form className="kestrel-inquiry-form" onSubmit={submit}>
    <div className="inquiry-fields">
      <label>Vārds <input name="name" type="text" autoComplete="name" required placeholder="Tavs vārds" /></label>
      <label>E-pasts <input name="email" type="email" autoComplete="email" required placeholder="vards@uznemums.lv" /></label>
      <label>Uzņēmums <input name="company" type="text" autoComplete="organization" placeholder="Uzņēmuma nosaukums" /></label>
      <label>Kas interesē
        <select name="service" defaultValue="Uzņēmuma mājaslapa">
          <option>Uzņēmuma mājaslapa</option>
          <option>Landing lapa</option>
          <option>Mājaslapas uzlabošana</option>
          <option>E-komercija</option>
          <option>SEO</option>
          <option>UI/UX dizains</option>
          <option>Hostings un uzturēšana</option>
          <option>Vēlos izrunāt</option>
        </select>
      </label>
    </div>
    <label className="inquiry-message">Īsi pastāsti par projektu
      <textarea name="message" rows={5} required placeholder="Ko vēlies izveidot vai uzlabot?" />
    </label>
    <button type="submit" className="inquiry-submit">{recipient ? "Sagatavot pieteikuma e-pastu" : "Kopēt pieteikumu"} <span aria-hidden="true">↗</span></button>
    <p className="inquiry-help">
      {recipient
        ? "Pieteikums atvērsies tavā e-pasta programmā. Nosūtīšanu apstiprināsi tur."
        : "Automātiska nosūtīšana vēl nav pieslēgta. Aizpildi formu un nokopē pieteikumu, lai to nosūtītu savā saziņas kanālā."}
    </p>
    {status === "copied" && <p className="inquiry-state" role="status">Pieteikuma teksts nokopēts starpliktuvē.</p>}
    {status === "error" && <p className="inquiry-state" role="alert">Neizdevās nokopēt. Pārbaudi pārlūka starpliktuves atļauju.</p>}
  </form>;
}
