import Itch from "../svg/Itch";
import Playstation from "../svg/Playstation";
import Steam from "../svg/Steam";
import Unity from "../svg/Unity";
import GameCard from "./GameCard";
import Width from "./Width";

export default function HomeGames() {
  return (
    <div className="games" id="games">
      <Width>
        <h2 className="games__heading">Our Games</h2>

        <div className="games__grid">
          <GameCard
            imageSrc="/images/math-frenzy.jpg"
            title="Math Frenzy"
            description="Coming Soon!"
            gameLinks={[
              {
                icon: <Playstation />,
                title: "Playstation",
              },
              {
                icon: <Steam />,
                title: "Steam",
              },
            ]}
          />

          <GameCard
            imageSrc="/images/super-hangman.jpg"
            title="Super Hangman"
            description="2024"
            gameLinks={[
              {
                href: "#",
                icon: <Steam />,
                title: "Steam",
              },
              {
                href: "#",
                icon: <Itch />,
                title: "Playstation",
              },

              {
                href: "#",
                icon: <Unity />,
                title: "Unity",
              },
            ]}
          />
        </div>
      </Width>
    </div>
  );
}
