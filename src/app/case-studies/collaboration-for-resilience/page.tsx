import Forward from "./_components/forward";
import Impact from "./_components/impact";
import Landing from "./_components/landing";
import Map from "./_components/map";
import Response from "./_components/response";
import Footer from "../../_components/layout/footer";



const impact = [
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/5.svg",
    num: "12",
    text: "Regional Entity Proposals 1 from Africa CDC, 1 from AU IBAR, 5 from Regional Economic Communitiest",
    img: "",
  },
  { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/6.svg", num: "40", text: "Single-country proposals", img: "" },
  { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/7.svg", num: "5", text: "Multi-Country Proposals", img: "" },
];
export default function Index() {
  return (
    <div>
      <Landing />
      <Response />
      <Impact />
      <Forward />
      <Map />
      <Footer />
    </div>
  );
}
