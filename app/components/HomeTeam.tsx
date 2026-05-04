import Link from "next/link";
import TeamCard from "./TeamCard";
import Width from "./Width";

export default function HomeAbout() {
  return (
    <section className="home-team" id="team">
      <Width>
        <div className="home-team__intro">
          <p className="home-team__eyebrow">The people behind Banuza</p>
          <h2 className="home-team__heading">Meet the team</h2>
          <p className="home-team__lead">
            We like playful ideas, sharp systems, and projects that feel a
            little more alive than the obvious version.
          </p>
        </div>

        <div className="home-team__grid">
          <TeamCard
            name="Robert Klein"
            title="Founder, Programmer"
            imageSrc="/images/robby.jpg"
            bio={
              <p>
                Robby is a full-stack developer who started making games for
                fun and kept going because interactive work felt more alive
                than anything else. That mix of curiosity, experimentation,
                and design obsession eventually turned into Banuza. He likes
                projects that feel playful, polished, and just a little less
                predictable than the safe version.
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
                Ryan is a software engineer and Banuza&apos;s lead programmer,
                focused on backend systems, Unity development, and the work
                that makes good ideas actually hold together. Early time with
                Warcraft III and World of Warcraft shaped how he thinks about
                game worlds and mechanics. He likes combining infrastructure,
                scripting, and gameplay problem-solving into experiences that
                feel sharp, stable, and fun to play.
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
    </section>
  );
}
