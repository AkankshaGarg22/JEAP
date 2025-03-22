import Forward from "./_components/forward";
import Impact from "./_components/impact";
import Landing from "./_components/landing";
import Map from "./_components/map";
import Response from "./_components/response";

const response = [
  { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/1.svg", text: "Issued joint statements by JEAP Partners and shared with Member States.", img: "" },
  { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/2.svg", text: "Designed a proposal development team, process and roles and responsibilities.", img: "" },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/3.svg",
    text: "Held briefings with MoHs, WHO Reps, Africa CDC RCCs and RECs, AUC Specialized Institutions, partners & IE’s.",
    img: "",
  },
  { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/4.svg", text: "Defined priority themes and former groups including JEAP TWGs and Member States.", img: "" },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/5.svg",
    text: "Listened to Member States and RECs communicate their EPR needs, priorities, ongoing projects, and commitments.",
    img: "",
  },
  { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/6.svg", text: "Harmonized country inputs and drafted proposals, iterating based on continuous consultations.", img: "" },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/7.svg",
    text: "Allocate budgets based on population size, infectious disease burden, domestic health financing and IDPs.",
    img: "",
  },
];

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
    </div>
  );
}
