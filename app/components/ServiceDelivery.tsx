import RevealOnView from "./RevealOnView";

type DeliveryItem = {
  title: string;
  text: string;
};

type ServiceDeliveryProps = {
  id: string;
  title: string;
  description: string;
  items: DeliveryItem[];
};

export default function ServiceDelivery({
  id,
  title,
  description,
  items,
}: ServiceDeliveryProps) {
  return (
    <section className="service-page-section service-delivery-section" aria-labelledby={id}>
      <div className="service-delivery-head">
        <RevealOnView>
          <p className="service-page-kicker">Projektā parasti ietilpst</p>
        </RevealOnView>

        <RevealOnView className="line-mask-reveal" delay={60}>
          <h2 id={id} className="service-line-stack service-delivery-title">
            <span className="service-reveal-line"><span>{title}</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView delay={150}>
          <p className="service-delivery-copy">{description}</p>
        </RevealOnView>
      </div>

      <div className="service-delivery-grid">
        {items.map((item, index) => (
          <RevealOnView className="service-delivery-item" delay={index * 70} key={item.title}>
            <span className="service-delivery-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </RevealOnView>
        ))}
      </div>

      <RevealOnView className="service-aftercare" delay={120}>
        <div>
          <span>Pēc palaišanas</span>
          <p>
            Ja vajag, varam turpināt ar hostingu, tehnisko uzturēšanu un
            turpmākiem mājaslapas uzlabojumiem.
          </p>
        </div>
        <small>Pēc nepieciešamības</small>
      </RevealOnView>
    </section>
  );
}
