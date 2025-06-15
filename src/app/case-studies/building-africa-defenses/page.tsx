
import Footer from "../../_components/layout/footer";
import LandingDefenses from "./_components/landingDefenses";
import TextSectionOne from "./_components/textSectionOne";
import { BlockQuote } from "../_components/QuoteSection";
import TextSectionTwo from "./_components/textSectionTwo";
import TextSectionThree from "./_components/textSectionThree";
import TextSectionFour from "./_components/textSectionFour";
import TextSectionFive from "./_components/textSectionFive";
import ReferenceList from "../_components/References";
import MainHeading from "../_components/main-heading";
import OverflowSection from "./_components/OverflowSection";
import SubHeading from "../_components/sub-heading";

const references = [
  " Weekly Bulletin on Outbreaks and other Emergencies: Week 42: 16 October - 22 October 2023 https://reliefweb.int/report/mozambique/weekly-bulletin-outbreaks-and-other-emergencies-week-42-16-october-22-october-2023-data-reported-1700-22-october-2023",
  " WHO Africa, 2022. Available from: https://www.afro.who.int/news/who-partners-seek-reboot-africas-health-emergency-response",
  " Mremi IR, George J, Rumisha SF, Sindato C, Kimera SI, Mboera LEG. Twenty years of integrated disease surveillance and response in Sub-Saharan Africa: challenges and opportunities for effective management of infectious disease epidemics. One Health Outlook. 2021 Nov 9;3(1):22. doi: 10.1186/s42522-021-00052-9. PMID: 34749835; PMCID: PMC8575546.Available here: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8575546/",
  " WHO Africa, 2019. “As risks of outbreaks grow, African health ministers agree to new response strategy” Accessed here: https://www.afro.who.int/news/risks-outbreaks-grow-african-health-ministers-agree-new-response-strategy ",
  " Electronic IHR States Parties Self-Assessment Annual Reporting Tool, WHO, 2022. Access at: https://extranet.who.int/e-spar#capacity-score.",
  " US CDC. https://www.cdc.gov/coronavirus/2019-ncov/variants/genomic-surveillance.html ",
  " WHO, 2016a, Accessed at: https://www.undrr.org/understanding-disaster-risk/terminology/hips/bi0062",
  " Moon S, Sridhar D, Pate MA, Jha AK, Clinton C, Delaunay S, Edwin V, Fallah M, Fidler DP, Garrett L, Goosby E, Gostin LO, Heymann DL, Lee K, Leung GM, Morrison JS, Saavedra J, Tanner M, Leigh JA, Hawkins B, Woskie LR, Piot P. Will Ebola change the game? Ten essential reforms before the next pandemic. The report of the Harvard-LSHTM Independent Panel on the Global Response to Ebola. Lancet. 2015 Nov 28;386(10009):2204-21. doi: 10.1016/ S0140-6736(15)00946-0. Epub 2015 Nov 23. PMID: 26615326; PMCID: PMC7137174.Accessed at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7137174/",
  " Moyo E, Moyo P, Mashe T, Dzobo M, Chitungo I, Dzinamarira T. Implementation of Public Health Genomics in Africa: Lessons from the COVID-19 pandemic, challenges, and recommendations. J Med Virol. 2023 Jan;95(1):e28295. doi: 10.1002/jmv.28295. Epub 2022 Nov 17. PMID: 36366938; PMCID: PMC9877907.Accessed at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9877907/ ",
  " https://gh.bmj.com/content/4/4/e001427",
  " https://gh.bmj.com/content/4/4/e001427",
  " Mremi, I.R., George, J., Rumisha, S.F. et al. Twenty years of integrated disease surveillance and response in Sub-Saharan Africa: challenges and opportunities for effective management of infectious disease epidemics. One Health Outlook 3, 22 (2021). https://doi.org/10.1186/s42522-021-000529 ",
  " AFRICA KICKS OUT WILD POLIO https://www.africakicksoutwildpolio.com/ ",
  " How wastewater surveillance is helping the COVID-19 fight https://www.afro.who.int/news/how-wastewater-surveillance-helping-covid-19-fight",
  " WHO Africa 2021. Accessed at: https://www.afro.who.int/news/scaling-genomic-sequencing-africa ",
  " A Six-Year Journey: Advancing Pathogen Genomics in Africa https://africacdc.org/news-item/a-six-year-journey-advancing-pathogen-genomics-in-africa/ ",
  " Digitizing public health genomics in Africa https://africacdc.org/news-item/digitizing-public-health-genomics-in-africa/ ",
  " WHO. (2022). Accessed at: https://www.who.int/news/item/16-09-2022-reflecting-on-the-implementation-of-genomic-surveillance-for-COVID-19-and-beyond-in-the-african-region",
  " WHO EMRO | Genomic sequencing for epidemic and pandemic preparedness and response: EMRO’s vision and strategic interventions | Volume 28 issue 12 | EMHJ volume 28 2022 https://www.emro.who.int/emhj-volume-28-2022/volume-28-issue-12/genomic-sequencing-for-epidemic-and-pandemic-preparedness-and-response-emros-vision-and-strategic-interventions.html",
  " Global genomic surveillance strategy for pathogens with pandemic and epidemic potential 2022–2032 https://www.who.int/initiatives/genomic-surveillance-strategy",

];


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
      <TextSectionTwo/>
      <TextSectionThree/>
      <OverflowSection/>
      <BlockQuote
          quote="Through jeap, we are leveraging all the insights and advancements gained during the covid-19 pandemic to effectively respond to every health situation and event we encounter."
          author="Dr Nicksy Gumede-Moeletsi"
          position="Senior Virologist,"
          organization="WHO Regional Office for Africa"
        />
      <TextSectionFour />
      <BlockQuote
          quote="In the face of ongoing global health challenges, The Africa CDC and WHO are committed to working together through the pathogen genomics initiativve to enhance disease outbreak detection and data sharing across Africa strengthening Africa’s genomic sequencing capabilities is essential for regional and global health security"
          author="Dr. Sofonias Tessema,"
          position="Africa CDC Program Lead,"
          organization="Pathogen Genomics"
        />
      <TextSectionFive/>


      <div className="w-[100%] flex items-start justify-center lg:pt-6">
      <SubHeading className="lg:pb-2 lg:w-[80%] w-[90%]">References</SubHeading>
      </div>
      <div className="w-full flex justify-center items-center lg:pb-6">
      <div className="w-[80%] lg:py-4 py-6 flex flex-col items-start justify-center">
     
      <ReferenceList items={references} className="w-full"></ReferenceList>
      </div>
      </div>
      <Footer />
    </div>
  );
}
