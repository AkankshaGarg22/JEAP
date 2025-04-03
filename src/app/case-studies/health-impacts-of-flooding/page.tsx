import Achievements from "./_components/achievements";
import Impact from "./_components/impact";
import Landing from "./_components/landing";
import References from "./_components/references";
import Responders from "./_components/responders";
import Response from "./_components/response";

export default function Index() {
  return (
    <div>
      <Landing />
      <Response />
      <Achievements />
      <Impact />
      <Responders />
      <References />
    </div>
  );
}
