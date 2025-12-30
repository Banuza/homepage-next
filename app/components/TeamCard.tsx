import Card from "./Card";

interface IProps {
  imageSrc: string;
  name: string;
  title: string;
  bio: React.ReactNode;
  favoriteGames: string[];
}

export default function TeamCard({
  imageSrc,
  name,
  bio,
  title,
  favoriteGames,
}: IProps) {
  return (
    <Card className="team-card">
      <div className="team-card__header">
        <img
          className="team-card__photo"
          src={imageSrc}
          loading="lazy"
          alt={name}
        />
        <div className="team-card__header-main">
          <h3 className="team-card__name">{name}</h3>
          <h4 className="team-card__title">{title}</h4>
        </div>
      </div>

      <div className="team-card__body">
        <div className="team-card__bio">{bio}</div>

        <div className="team-card__games">
          <h5 className="team-card__games-heading">Favorite games</h5>
          <p className="team-card__games-list">{favoriteGames.join(", ")}</p>
        </div>
      </div>
    </Card>
  );
}
