import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import Leadership from "./_components/leadership";
import Resources from "./_components/resources";
import { Tabs } from "./_components/tabs";
import { TimeLine } from "./_components/time-line";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      {/* <Container> */}
        <Tabs />
        <TimeLine />
        <Resources />
        <Leadership />
      {/* </Container> */}
    </main>
  );
}
