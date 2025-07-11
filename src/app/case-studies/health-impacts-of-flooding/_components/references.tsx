import SubHeading from "../../_components/sub-heading";

export default function References() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="w-full h-64 md:h-[30rem] mb-12">
        <img loading="lazy"
          className="h-full w-full object-cover object-center"
          src="/assets/blog/case-studies/flooding in the Republic of Congo/Webp/5.webp"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col gap-4 justify-between">
        <SubHeading className="w-[30%]">References</SubHeading>

        <p className="text-sm">
          1. WHO Regional Office for Africa. Africa faces rising climate-linked
          health emergencies.
          
          <a target="_blank" href="https://www.afro.who.int/news/africa-faces-rising-climate-linked-health-emergencies" className="text-blue-600 underline">https://www.afro.who.int/news/africa-faces-rising-climate-linked-health-emergencies</a>
          <br />
          2. Kaseya J, Dereje N, Tajudeen R, et al. Climate change and malaria,
          dengue and cholera outbreaks in Africa: a call for concerted
          actions.BMJ Glob Health 2024;9:e015370. doi:10.1136/bmjgh-2024-015370
          <a target="_blank" href="https://gh.bmj.com/content/9/3/e015370.full.pdf" className="text-blue-600 underline"> https://gh.bmj.com/content/9/3/e015370.full.pdf</a>
          <br />
          3. African Volunteer Health Corps – Strengthening & Utilizing Response Groups for Emergencies.
        </p>
      </div>
    </section>
  );
}
