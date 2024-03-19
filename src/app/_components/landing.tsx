export default function Landing() {
  const backgroundImageUrl = "/assets/blog/Header-image.jpg";
  return (
    <div className="min-h-screen">
      <section
        className={`relative text-white w-full h-screen bg-cover bg-opacity-80 bg-fixed flex flex-col justify-center items-center [clip-path:circle(180vh_at_50%_-80vh)]`}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="flex flex-col justify-center items-center w-3/4 text-center">
          <h1 className="text-6xl  font-bold">THE JOINT EMERGENCY ACTION PLAN (JEAP) UNLOCKING AFRICA'S RESILIENCE</h1>
          <p className="text-3xl">
            The JEAP, borne out of a partnership between the Africa CDC and the World Health Organization, is a regional platform that focuses on consolidating Pandemic Preparedness and Response (PPR)
            efforts across the continent to dramatically improve how countries prepare for, detect, and respond to emergencies, while simultaneously ensuring no country is left behind.
          </p>
        </div>
      </section>
    </div>
  );
}
