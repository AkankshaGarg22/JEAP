
import Footer from "../../_components/layout/footer";
import LandingDefenses from "./_components/landingDefenses";
import { BlockQuote } from "./_components/QuoteSection";
import TextSectionOne from "./_components/textSectionOne";


export default function Index() {
  return (
    <div>
      <LandingDefenses />
      <TextSectionOne/>
      <BlockQuote
          quote="During the covid-19 era, very few countries had access to genomic surveillance. Those that did have capacity did not treat their laboratories like research facilities capable of studying organisms in real time. As a result, we had very limited resources to respond to the outbreak or pandemic effectively"
          author="Dr Nicksy Gumede-Moeletsi"
          position="Senior Virologist"
          organization="WHO Regional Office for Africa"
        />
        
      <Footer />
    </div>
  );
}
