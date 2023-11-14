import "./style.scss";

interface AllBooksCardProps {
  cover: string;
  title: string;
  author: string;
}

const AllBooksCard = ({ cover, title, author }: AllBooksCardProps) => {
  return (
    <div id="all-books-card">
      <div className="img-block">
        <img src={cover} alt="" />
      </div>
      <div className="text-block">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </div>
    </div>
  );
};

export default AllBooksCard;
