import Landing from "./_components/landing";
import Mission from "./_components/mission";
import WorldMap from "./_components/worldmap";
import Leadership from "./_components/leadership";
import Resources from "./_components/resources";
import Operation from "./_components/operation";
import { Tabs } from "./_components/tabs";
import { TimeLine } from "./_components/time-line";
import TurnAroundTime from "./_components/turnaround-time";
import ErrorBoundary from "./_components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./_components/loading";

export default function Index() {
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<Loading></Loading>}>
          <Landing />
          <Mission />
          <WorldMap />
          <TurnAroundTime />
          <Tabs />
          <TimeLine />
          <Operation />
          <Resources />
          <Leadership />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
