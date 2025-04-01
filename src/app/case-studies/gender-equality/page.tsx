import Countries from "./_components/countries";
import Landing from "./_components/landing";
import Policies from "./_components/policies";
import Surge from "./_components/surge";
import { BlockQuote } from "../_components/QuoteSection";
import Footer from "../../_components/layout/footer";
import References from "./_components/references";
import Continent from "./_components/continent";
import Challenges from "./_components/challenges";
import Runners from "./_components/runners";

export default function Index() {
  return (
    <div>
      <Landing />
      <Surge />
      <BlockQuote
        quote="Having women involved in the AVoHC-surge selection committee ensures that women applicants are given consideration."
        author="Ishata Conteh"
        position="Emergency Management Team Lead"
        organization="WHO Regional Offices for Africa"
      />
      <Countries />
      <Policies />
      <BlockQuote
        quote="It is important to us that there is enough female representation among first responders so that women’s needs are considered. during a recent deployment to malawi, we made a point to send two women and one man as the first to respond."
        author="Fatima Tafida"
        position="Regional Supply Chain Lead"
        organization="WHO Regional Offices for Africa"
      />
      <Runners  />
      <BlockQuote
        quote="My newfound confidence and skills in delivering and training on GBV and PSEAH issues will undoubtedly make a significant difference in my role as a mental health and psychosocial support officer."
        author="Pearl Katleho Malsaaka Letsoela"
        position="Mental Health and Psychosocial Support Officer"
        organization="Ministry of Health, Lesotho"
      />
      <Challenges />
      <BlockQuote
        quote="When we provide trainings to communities about disease spread, participants will ask us afterwards if we are married. it makes us wonder whether they have been listening to the information, and how much credibility we have in this setting."
        author="Female AVoHC-SURGE Frontline Workers"
        position=""
        organization=""
      />
      <Continent />
      <References />
      <Footer />
    </div>
  );
}
