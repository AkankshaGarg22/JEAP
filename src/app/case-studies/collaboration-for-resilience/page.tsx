import Forward from "./_components/forward";
import Impact from "./_components/impact";
import Landing from "./_components/landing";
import Map from "./_components/map";
import Response from "./_components/response";
import Footer from "../../_components/layout/footer";




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
