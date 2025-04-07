import Image from "next/image";
import Paragraph from "../../_components/paragraph";
import MainHeading from "../../_components/main-heading";
import AnimatedHeading from "../../_components/AnimatedHeading";
import SubHeading from "../../_components/sub-heading";

export default function Landing() {
  return (
    <section className="min-h-screen bg-white">
      {/* Main Hero Section with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[62vh] md:h-[50vh] lg:h-[80vh] relative">
          <Image
            className="object-top"
            src="/assets/blog/case-studies/Gender_equality/Webp_format/1.webp"
            alt="JEAP Partnership Members"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

          {/* Hero Text */}
          <div className="absolute bottom-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <MainHeading className="mb-4 text-white">
                GENDER EQUALITY IN EMERGENCY PREPAREDNESS AND RESPONSE
              </MainHeading>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" md:pb-10 md:pt-6  bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8">
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-12 order-1 mb-6">
            <AnimatedHeading linecolor="white" width="20%" className="mb-4">
            GENDER INEQUALITIES IN THE HEALTH EMERGENCY WORKFORCE, AFFECTING
              BOTH FRONTLINES ROLES AND LEADERSHIP POSITIONS, LIMIT WOMEN’S
              POTENTIAL AND UNDERMINE THE OVERALL EFFECTIVENESS OF HEALTH
              EMERGENCY PREPAREDNESS AND RESPONSE EFFORTS.
            </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-12 order-2">
            <Paragraph>
              The COVID-19 pandemic highlighted these inequalities around the
              globe. Studies have found that women were less able than their
              male counterparts to access personal protective equipment (PPE)
              during shortages, which has been attributed to the fact that women
              health workers tend to be clustered in lower status roles rather
              than in leadership positions, putting them at a disadvantage in
              accessing sparse resources. Studies also find that PPE used during
              the pandemic was not designed for and did not fit most women’s
              bodies, putting them at greater risk of infection and working in
              undignified and uncomfortable conditions.
            </Paragraph>
            <Paragraph className="mt-1">
              Although health services are predominantly delivered by women, the
              sector is led by men. As of 2023, women held only 25% of
              leadership roles in health despite occupying around 70% of health
              worker jobs.<sup>3</sup> The number drops dramatically to 5% for women from
              low -middle income countries in leadership.
            </Paragraph>
          </div>

          <div className="lg:col-span-12 order-3">
            <div className="relative w-full bg-[#386d64] text-white py-8 px-4 before:content-[''] before:absolute before:top-0 before:left-1/4 before:-translate-x-1/2 before:-translate-y-1/2 before:border-l-[50px] before:border-r-[50px] before:border-b-[24px] before:border-l-transparent before:border-r-transparent before:border-[#386d64]">
              <div className="container mx-auto text-center">
                <SubHeading>
                Women make up 70% of health workers, yet occupy just 23% of
                leadership roles in the sector.
                </SubHeading>
              </div>
            </div>
          </div>

          {/* Image - Full width on both mobile and desktop, appears at bottom */}
          <div className="lg:col-span-5 order-3 mt-6">
            <div className="w-full h-64 md:h-full relative">
              <img
                src="/assets/blog/case-studies//Gender_equality/Webp_format/2.webp"
                alt="JEAP Partnership Meeting"
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-4 mt-6">
            <Paragraph>
              Such gender disparities in the health workforce affect emergency
              response strategies, policies and programs - ultimately weakening
              the services provided to vulnerable populations during a crisis.
              Women and girls are among the most vulnerable groups in any
              emergency, including in health, armed conflict and humanitarian
              disasters. Harmful gender norms disproportionately increase their
              risk of illness and limit their access to health information and
              services due to reduced decision-making power and less control
              over resources. When women are able to actively participate in and
              lead response efforts, the needs and perspectives of women on the
              ground during emergencies are better taken into account, resulting
              in better response outcomes for those in need.
            </Paragraph>
            <Paragraph className="mt-8">
              Studies show that incorporating women's professional expertise and
              perspectives strengthens health systems by promoting a balanced
              workforce, safe and decent working conditions for all health
              workers, and more equal career progression opportunities for
              women. When women are leaders, they not only hire new female
              talent to fill vacancies but also retain the experienced women,
              thereby providing a stronger foundation for health systems. With
              the African continent facing multiple and often concurrent crises,
              it is critical that emergency prevention and response (EPR)
              initiatives adopt gender-sensitive approaches.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
