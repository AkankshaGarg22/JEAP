import Paragraph from "../../_components/paragraph";
import SubHeading from "../../_components/sub-heading";
import AnimatedHeading from "../../_components/AnimatedHeading";
import { BlockQuote } from "../../_components/QuoteSection";

export default function CholeraQuote() {
  return (
    <section className="bg-white pt-14 flex justify-center">
      <div className="relative">
        <BlockQuote
          quote="The ripple effect of this training is the responders go home and are able to apply what they learnt in Malawi. We are providing this support to the country as a best practice."
          author="Fatima Tafida"
          position="Regional Supply Chain Lead"
          organization="EPR, WHO AFRO."
        ></BlockQuote>
        <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-10 pt-8 md:pt-20">
          <Paragraph className="col-span-10">
            Beyond this response in Malawi, the JEAP partners are supporting
            other African countries to fight Cholera. In the first half of 2024,
            381,392 Cholera cases have been reported in countries such as
            Burundi, Comoros, the DRC, Ethiopia and Kenya. To support rapid
            response efforts in these countries, the WHO’s Incident Management
            Team has been deployed to over 40 Cholera Treatment Centres (CTCs)
            to conduct supportive supervision, provide training on CTC
            registers, and to orient CTC staff to conduct mortality audits. WHO
            has allocated over $3.5 million USD responding to the Cholera crisis
            in Africa and scaled up its investment by $751,154 in 2024.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
