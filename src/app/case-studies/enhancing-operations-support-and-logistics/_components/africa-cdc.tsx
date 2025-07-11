import Paragraph from "../../_components/paragraph";
import SubHeading from "../../_components/sub-heading";

export default function AfricaCDC() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:mb-12 mb-10">
      <div className="w-full h-64 md:h-[40rem] md:mb-12 mb-8">
        <img loading="lazy" className="h-full w-full object-cover object-center" src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/WHO00644.jpg" alt="" />
      </div>
      <div className="w-full flex">
        <Paragraph>
        The hubs have also contributed to drastically reducing the cost of moving emergency supplies within the continent. Shipping 30 tonnes of supplies from WHO’s Dubai Logistics Hub to countries in Africa costs approximately $450,000 USD, while shipping the same amount from the Nairobi Warehouse to countries in East and Southern Africa costs approximately US$ 75,000—an 83.3% decrease in costs<sup>9</sup> <br/><br/> Each WHO Emergency Hub has a specialized function to leverage each host country’s comparative advantage to support the rest of the continent. The Senegal Hub focuses on Supply Chain, Data, Innovation & Intelligence; the Kenya Hub on Supply Chain and Workforce Development; and the forthcoming South Africa Hub will focus on R&D and Genomic Surveillance. As such, each Hub acts as a continental resource centre for African expertise and facilitates cross-country learning on this theme. <br/><br/> Africa CDC is currently building and equipping a regional hub in Cameroon which will further strengthen EPR on the continent, and OSL in particular.
        </Paragraph>
      </div>
    </section>
  );
}
