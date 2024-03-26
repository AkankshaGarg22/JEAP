export default function Landing() {
  const backgroundImageUrl = "/assets/blog/Header_image.png";
  return (
    <div className="min-h-screen">
      <section
        className={`relative text-white w-full h-screen bg-auto bg-center md:bg-cover bg-opacity-80 bg-fixed flex flex-col justify-center items-center [clip-path:circle(75%_at_49%_29%)] md:[clip-path:circle(180vh_at_50%_-80vh)] animate-[changeImage_50s_linear_infinite]`}
      >
        <div className="flex flex-col justify-center items-center w-3/4 text-center">
          <h1 className="leading-1 md:leading-[1.5] text-2xl  md:text-6xl font-medium md:font-bold">THE JOINT EMERGENCY ACTION PLAN (JEAP) UNLOCKING AFRICA'S RESILIENCE</h1>
          <p className="text-lg md:text-3xl">
            The JEAP, borne out of a partnership between the Africa CDC and the World Health Organization, is a regional platform that focuses on consolidating Pandemic Preparedness and Response (PPR)
            efforts across the continent to dramatically improve how countries prepare for, detect, and respond to emergencies, while simultaneously ensuring no country is left behind.
          </p>
        </div>
      </section>
    </div>
  );
}
