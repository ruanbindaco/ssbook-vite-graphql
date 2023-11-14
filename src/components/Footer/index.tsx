import "./style.scss";
import Logo from "../../assets/logoFooter.svg";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/homeIcon.svg";
import AddIcon from "../../assets/icons/addIcon.svg";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import FavIcon from "../../assets/icons/favIcon.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const Footer = () => {
  const windowType = useWindowSize();
  return (
    <div id="footer">
      {windowType === "desktop" ? (
        <div className="footer-desktop">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="rights-reserved">
            <p>Todos os direitos reservados.</p>
            <p>Studio Sol Books © 2023</p>
          </div>
        </div>
      ) : (
        <div className="footer-mobile">
          <div className="icons">
            <Link to="/">
              <img src={HomeIcon} />
            </Link>
            <p className="label">Início</p>
          </div>
          <div className="icons">
            <img src={AddIcon} />
            <p className="label">Adicionar</p>
          </div>
          <div className="icons">
            <img src={SearchIcon} />
            <p className="label">Buscar</p>
          </div>
          <div className="icons">
            <img src={FavIcon} />
            <p className="label">Favoritos</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
