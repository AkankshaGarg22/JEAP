import Footer from "../../_components/layout/footer";
import CapacityBuilding from "./_components/capacity-building";
import CholeraOutbreak from "./_components/cholera-outbreak";
import CholeraQuote from "./_components/cholera-quote";
import EmergencyHub from "./_components/emergency-hub";
import HumanitarianResponse from "./_components/humanitarian-response";
import Landing from "./_components/landing";
import OslApproach from "./_components/osl-approach";
import Partnership from "./_components/partnership";

export default function Index() {
  return (
    <div>
      <Landing />
      <Partnership />
      <OslApproach />
      <HumanitarianResponse/>
      <CapacityBuilding />
      <CholeraOutbreak />
      <CholeraQuote />
      <EmergencyHub />
      <Footer />
    </div>
  );
}
