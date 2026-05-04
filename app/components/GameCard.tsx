import Steam from "../svg/Steam";
import Playstation from "../svg/Playstation";
import Link from "next/link";
import Button from "./Button";

interface IProps {
  imageSrc: string;
  title: string;
  description: string;
  gameLinks: IGamelink[];
}

interface IGamelink {
  icon: React.ReactNode;
  title: string;
  href?: string;
}

export default function GameCard({
  imageSrc,
  title,
  description,
  gameLinks,
}: IProps) {
  return (
    <div className="card">
      <img className="card__image" src={imageSrc} alt="Math Frenzy" />
      <div className="card__text">
        <div className="card__header">
          <h3 className="card__heading card__heading--large">{title}</h3>
          <time className="card__meta">{description}</time>
        </div>

        <ul className="game-links">
          {gameLinks.map((gameLink, i) => {
            return (
              <li key={i} className="game-links__item">
                {gameLink.href ? (
                  <Button size="small" href={gameLink.href}>
                    {gameLink.icon}
                    <span>{gameLink.title}</span>
                  </Button>
                ) : (
                  <Button
                    size="small"
                    type="button"
                    disabled
                    className="button button--small"
                  >
                    {gameLink.icon}
                    <span>{gameLink.title}</span>
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
