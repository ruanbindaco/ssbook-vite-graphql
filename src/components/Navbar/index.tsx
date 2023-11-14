import "./style.scss";
import "../../pages/BookInfo/style.scss";
import "../../pages/Home/style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoNavbar.svg";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import AddIcon from "../../assets/icons/addIcon.svg";
import FavIcon from "../../assets/icons/favIcon.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { GET_ALL_DATA, apolloClient } from "../../lib/apollo";
import { useQuery } from "react-query";
import { HomeQueryProps } from "../../types";

const Navbar = () => {
  const windowType = useWindowSize();

  const { data, isLoading }: HomeQueryProps = useQuery("myData", async () => {
    const response = await apolloClient.query({ query: GET_ALL_DATA });

    return response.data;
  });

  return (
    <>
      <div id="navbar">
        <div className="background-navbar"></div>
        <div className="first-block">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="SSBook" />
            </Link>
          </div>
          {windowType === "desktop" && (
            <div className="search-bar">
              <input type="text" placeholder="Busque um livro" />
              <img className="icon" src={SearchIcon} alt="Search" />
            </div>
          )}
        </div>
        <div className="second-block">
          {windowType === "desktop" && (
            <div className="favotite-actions">
              <img src={AddIcon} alt="Add to favorites" />
              <div>Adicionar</div>
              <div>
                <img src={FavIcon} alt="Favorites" />
              </div>
              <div>Favoritos</div>
            </div>
          )}
          <div className="line"></div>
          <div className="profile-options">
            <img src={!isLoading ? data?.userPicture : ""} alt="Profile" />
            {windowType === "desktop" && <div>Ruan</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
