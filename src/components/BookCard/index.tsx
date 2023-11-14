import "./style.scss";

interface BookCardProps {
  cover: string;
  title: string;
  author: string;
}

const BookCard = ({ cover, title, author }: BookCardProps) => {
  return (
    <div id="book-card">
      <div className="img-block">
        <img src={cover} alt={title} />
      </div>
      <div className="text-block">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
