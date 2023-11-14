import "./style.scss";

interface ArtistCardProps {
  picture: string;
  title: string;
  booksCount: number;
}

const ArtistCard = ({ picture, title, booksCount }: ArtistCardProps) => {
  return (
    <div id="artist-card">
      <div className="img-block">
        <img src={picture} />
      </div>
      <div className="text-block">
        <p className="title">{title}</p>
        <p className="books-count">{`${booksCount} livros`}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
