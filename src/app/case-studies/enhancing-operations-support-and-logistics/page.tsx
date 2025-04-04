import Footer from "../../_components/layout/footer";
import AcceleratingEmergency from "./_components/accelerating-emergency";
import AfricaCDC from "./_components/africa-cdc";
import CapacityBuilding from "./_components/capacity-building";
import CholeraOutbreak from "./_components/cholera-outbreak";
import CholeraQuote from "./_components/cholera-quote";
import EmergencyHub from "./_components/emergency-hub";
import Expertise from "./_components/expertise";
import HumanitarianResponse from "./_components/humanitarian-response";
import Landing from "./_components/landing";
import Map from "./_components/map";
import OslApproach from "./_components/osl-approach";
import Partnership from "./_components/partnership";
import PlanningForFuture from "./_components/planning-for-future";
import References from "./_components/refrences";

export default function Index() {
  return (
    <div>
      <Landing />
      <Partnership />
      <OslApproach />
      <HumanitarianResponse />
      <CapacityBuilding />
      <CholeraOutbreak />
      <CholeraQuote />
      <EmergencyHub />
      <Map />
      <AfricaCDC />
      <Expertise />
      <AcceleratingEmergency />
      <PlanningForFuture />
      <References />
      <Footer />
    </div>
  );
}
