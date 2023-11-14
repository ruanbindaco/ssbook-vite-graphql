import "./style.scss";
import { useQuery } from "react-query";
import { GET_ALL_DATA, apolloClient } from "../../lib/apollo";
import { useState } from "react";
import BookCard from "../../components/BookCard";
import {
  FavoriteBooksProps,
  FavoriteAuthorsProps,
  AllBooksProps,
  HomeQueryProps,
} from "../../types";
import ArtistCard from "../../components/ArtistCard";
import LibraryCard from "../../components/AllBooksCard";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [genre, setGenre] = useState("All");

  const { data, isLoading }: HomeQueryProps = useQuery("myData", async () => {
    const response = await apolloClient.query({ query: GET_ALL_DATA });

    return response.data;
  });

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div id="home-page">
          <div className="top-options">
            <div className="option">Meus livros</div>
            <div className="option">Emprestados</div>
          </div>
          <div className="favorite-books">
            <div className="header">
              <div className="title">Livros favoritos</div>
              <div className="all-books">Ver todos</div>
            </div>
            <div className="body">
              {data?.favoriteBooks.map((book: FavoriteBooksProps) => {
                return (
                  <Link to={`/book/${book.id}`} key={book.id}>
                    <BookCard
                      cover={book.cover}
                      title={book.name}
                      author={book.author.name}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="artists-block">
            <div className="background"></div>
            <div className="favorite-artists">
              <div className="header">
                <div className="title">Artistas favoritos</div>
                <div className="all-artists">Ver todos</div>
              </div>
              <div className="body">
                {data?.favoriteAuthors.map((author: FavoriteAuthorsProps) => {
                  return (
                    <div key={author.id} className="artists">
                      <ArtistCard
                        picture={author.picture}
                        title={author.name}
                        booksCount={author.booksCount}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="library">
              <div className="title">Biblioteca</div>
              <div className="buttons">
                <div
                  onClick={() => setGenre("All")}
                  className={`all-button ${genre === "All" ? "selected" : ""}`}
                >
                  Todos
                </div>
                <div
                  onClick={() => setGenre("Romance")}
                  className={`romance ${genre === "Romance" ? "selected" : ""}`}
                >
                  Romance
                </div>
                <div
                  onClick={() => setGenre("Adventure")}
                  className={`adventure ${
                    genre === "Adventure" ? "selected" : ""
                  }`}
                >
                  Aventura
                </div>
                <div
                  onClick={() => setGenre("Comedy")}
                  className={`comedy ${genre === "Comedy" ? "selected" : ""}`}
                >
                  Comédia
                </div>
              </div>
              <div className="books-list">
                {data?.allBooks.map((book: AllBooksProps) => {
                  return (
                    <Link
                      to={`/book/${book.id}`}
                      key={book.id}
                      className="book"
                    >
                      <LibraryCard
                        cover={book.cover}
                        title={book.name}
                        author={book.author.name}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
