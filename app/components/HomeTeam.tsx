import Link from "next/link";
import TeamCard from "./TeamCard";
import Width from "./Width";

export default function HomeAbout() {
  return (
    <div className="home-team" id="team">
      <Width>
        <h2 className="home-team__heading">Meet the team</h2>

        <div className="home-team__grid">
          <TeamCard
            name="Robert Klein"
            title="Founder, Programmer"
            imageSrc="/images/robby.jpg"
            bio={
              <p>
                Robby is a full-stack web developer who started making video
                games purely for fun. What began as a way to learn and
                experiment quickly grew into a deeper love for building
                interactive experiences. That curiosity eventually turned into
                Banuza, a small, indie space for creating games, collaborating
                with others, and chasing ideas that feel exciting rather than
                safe.
              </p>
            }
            favoriteGames={["Cuphead", "Rocket League", "Super Mario Bros. 3"]}
          />

          <TeamCard
            name="Ryan Flores"
            title="Lead Programmer"
            imageSrc="/images/ryan.jpg"
            bio={
              <p>
                Ryan is a software engineer and Banuza's lead programmer, with a
                strong focus on backend development and building games in Unity.
                Inspired by World of Warcraft and Warcraft III from an early
                age, he's been fascinated by game worlds and how they work ever
                since. Ryan enjoys experimenting with servers, scripts, and new
                technologies, blending infrastructure know-how with a love for
                game mechanics to help shape fun, polished experiences.
              </p>
            }
            favoriteGames={["World of Warcraft", "Path of Exile", "Minecraft"]}
          />
        </div>

        <p className="home-team__collab">
          We're always looking for new people to collaborate with,{" "}
          <Link href="mailto:hello@banuza.com">reach out</Link> and let's make
          something fun.
        </p>
      </Width>
    </div>
  );
}
