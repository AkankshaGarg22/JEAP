import Container from "@/app/_components/container";
import Landing from "./_components/landing";
import Leadership from "./_components/leadership";
import Resources from "./_components/resources";
import { Tabs } from "./_components/tabs";
import { TimeLine } from "./_components/time-line";

export default function Index() {
  return (
    <main>
      {/* <Container> */}
      <Landing />
      <Tabs />
      <TimeLine />
      <Resources />
      <Leadership />
      {/* </Container> */}
    </main>
  );
}
