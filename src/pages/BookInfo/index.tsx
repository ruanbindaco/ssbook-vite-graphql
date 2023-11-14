import "./style.scss";
import { useQuery } from "react-query";
import { GET_BOOK_DATA, apolloClient } from "../../lib/apollo";
import { Link, useParams } from "react-router-dom";
import { BookInfoProps } from "../../types";
import { useWindowSize } from "../../hooks/useWindowSize";
import FavIcon from "../../assets/icons/favIcon.svg";
import ShareIcon from "../../assets/icons/shareIcon.svg";
import BackIcon from "../../assets/icons/backIcon.svg";
import MenuIcon from "../../assets/icons/menuIcon.svg";
import DownloadIcon from "../../assets/icons/downloadIcon.svg";
import FavOffIcon from "../../assets/icons/favOffIcon.svg";
import Navbar from "../../components/Navbar";

const BookInfo = () => {
  const { bookId } = useParams();
  const windowType = useWindowSize();

  const { data, isLoading } = useQuery("myBookData", async () => {
    const response = await apolloClient.query({ query: GET_BOOK_DATA(bookId) });

    return response.data;
  });

  const book: BookInfoProps = data?.book;

  return (
    <>
      {windowType === "desktop" ? (
        <Navbar />
      ) : (
        <div id="navbar-closed">
          <Link to="/">
            <img src={BackIcon} />
          </Link>
          <div>
            <img src={MenuIcon} />
          </div>
        </div>
      )}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div id="book-info" key={book.id}>
          <div className="background"></div>
          <div className="left-column">
            <div className="img-block">
              <img src={book.cover} alt={book.name} />
            </div>
            <div className="icons-action">
              <div className="favorite">
                <img src={FavIcon} alt="Favorite" />
                <p className="label">Favoritar</p>
              </div>
              <div className="share">
                <img src={ShareIcon} alt="Share" />
                <p className="label">Compartilhar</p>
              </div>
              <div className="save-list">
                <img src={DownloadIcon} alt="Save" />
                <p className="label">Salvar em uma lista</p>
              </div>
            </div>
          </div>
          <div style={{ background: "white" }}></div>
          <div className="right-column">
            <div className="head-text">
              <div className="title-fav">
                <p className="title">{book.name}</p>
                {windowType === "mobile" && <img src={FavOffIcon} />}
              </div>
              <p className="author">{book.author.name}</p>
            </div>
            <div className="body-text">{book.description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookInfo;
