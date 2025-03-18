export default function Progress() {
  return (
    <div className="mx-auto py-[20px] md:py-[30px] flex flex-col items-center">
      {/* Header */}
      <h2 className="basis-2/5 text-lg md:text-xl lg:text-6xl font-bold text-center p-6 text-white xl:mb-15">Progress of Technical Working Groups</h2>

      {/* Main content card */}
      <div className="basis-3/5 p-4 xl:min-h-[60vh] flex flex-col md:flex-row items-stretch justify-evenly gap-4 bg-[#3a6e63] text-white rounded-lg m-4 overflow-hidden md:w-5/6 border border-red">
        {/* Image container - hidden on mobile, shown on md+ screens */}
        <div className="basis-1/3">
          <div className="aspect-square h-full w-full relative rounded-lg overflow-hidden">
            <img className="object-cover h-full w-full" src="/assets/blog/about/partnership/3.webp" alt="Mother and child" />
          </div>
        </div>

        {/* Text content */}
        <div className="basis-2/3 flex flex-col gap-4 justify-center">
          <h2 className="text-xl md:text-3xl font-bold  mb-2">Overview</h2>
          <p className="text-xl mb-4 font-semibold ">Strategic 5-year action plans guiding each collaboration area</p>
          <p className="text-sm md:text-lg mb-3">
            As of May 2024, five technical working groups (TWGs) completed detailed action plans and began implementing activities leveraging JEAP seed funding and internal funding from each of the
            founding agencies: Workforce Development; Response Readiness and Coordination; Surveillance including Laboratory and Genome Sequencing; Country Assessments in the Preparedness Context;
            Logistics, Stockpiling, Supply Chain and Local Manufacturing. Three newer TWGs – Climate Change in the EPR Context, Community Engagement, Digitalization – are in the process of validating
            their action plans as of May 2024 and opportunistically conducting collaborative activities. TWG Action Plans build upon and streamline the efforts of both agencies. They define joint
            strategic objectives, assigning a lead agency for each objective to create efficiencies and selecting strategic activities based on Member State needs.
          </p>
        </div>
      </div>
    </div>
  );
}
