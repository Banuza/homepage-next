import HomeTeam from "./components/HomeTeam";
import HomeGames from "./components/HomeGames";
import HomeHero from "./components/HomeHero";
import HomeSubscribe from "./components/HomeSubscribe";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeGames />
      <HomeSubscribe />
      <HomeTeam />
    </>
  );
}
