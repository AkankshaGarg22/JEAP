import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Impact() {
  return (
    <section className="flex justify-end w-full bg-white my-4 xl:my-24">
      <div className="grid grid-cols-1 xl:grid-cols-5 items-center xl:gap-6">
        {/* Image Section */}
        <div className="relative w-full xl:w-[25rem] col-span-1 h-96 xl:h-[80%]">
          <img loading="lazy"
            className="w-full xl:w-120 h-full object-cover object-center"
            src="/assets/blog/case-studies/flooding in the Republic of Congo/Webp/3.webp"
            alt="A Unified Africa for Health Security"
          />
        </div>

        {/* Text Section */}
        <div className="bg-gradient-to-b col-span-4 from-[#00205C] to-[#1A5632] p-4 py-8 xl:px-0 xl:py-30 text-white">
          <div className="xl:pl-48 md:px-12">
            <AnimatedHeading linecolor="white" width="20%" className="w-[90%]">
              The Impact: More Than 2,000 Patients in Flood-Affected Communities
              Received Essential Health Care and Services, Congo Saw Zero
              Flood-Related Disease Outbreaks.
            </AnimatedHeading>
            <Paragraph className="xl:pr-2 pt-8 xl:w-[90%]">
              The strategic deployment of nine mobile clinics staffed by expert
              professionals was pivotal in delivering critical, life-saving
              healthcare services. Cumulatively, the clinics reached 2,000
              people in flood-affected communities across five regions
              (Likouala, Sangha, Pool, Cuvette, and Plateux).
              <br />
              <br />
              Further, as a result of the rapid and comprehensive response
              including enhanced surveillance, no water-borne or vector-borne
              diseases exceeded alert levels. As of March 2024, no flood-related
              disease outbreaks were identified. While there continue to be
              humanitarian needs, the high risk levels as of January for
              outbreaks of cholera, malaria and others, have been reduced to
              either moderate or low risks. The aversion of these high risks
              represents considerable savings in terms of human life and
              economic costs.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
