import Button from "./Button";
import Width from "./Width";

export default function HomeHero() {
  const bubbles = [
    "home-hero__bubble--1",
    "home-hero__bubble--2",
    "home-hero__bubble--3",
    "home-hero__bubble--4",
    "home-hero__bubble--5",
    "home-hero__bubble--6",
  ];

  return (
    <section className="home-hero">
      <div className="home-hero__noise" aria-hidden="true" />
      <div className="home-hero__bubbles" aria-hidden="true">
        {bubbles.map((bubble) => (
          <span key={bubble} className={`home-hero__bubble ${bubble}`} />
        ))}
      </div>
      <Width className="home-hero__layout">
        <div className="home-hero__content">
          <h1 className="home-hero__heading">
            Playful on the surface.
            <br />
            Precise where it counts.
          </h1>
          <p className="home-hero__copy">
            Banuza builds bright, tightly designed games with fast reads,
            expressive systems, and enough friction to stay interesting.
          </p>

          <div className="home-hero__actions">
            <Button href="/#games" size="large">
              See the games
            </Button>
            <Button href="mailto:hello@banuza.com" className="home-hero__ghost">
              Contact the studio
            </Button>
          </div>
        </div>
      </Width>
    </section>
  );
}
