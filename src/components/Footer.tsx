import { Link } from 'react-router-dom';
import logo from '../images/icons/LOGO.svg';
import arrow from '../images/icons/Arrow_up.svg';

export const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
        </Link>

        <ul className="footer__menu">
          <li className="footer__item">
            <Link
              to="https://github.com/vasyliev-anton"
              className="footer__link"
              target="__blank"
            >
              GitHub
            </Link>
          </li>
          <li className="footer__item">
            <Link to="#/" className="footer__link">contacts</Link>
          </li>
          <li className="footer__item">
            <Link to="#/" className="footer__link">rights</Link>
          </li>
        </ul>

        <div className="footer__button">
          <span className="footer__button-text">Back to top</span>
          <div
            className="footer__button-arrow"
          >
            <button
              className="arrowButton"
              type="button"
              onClick={handleClick}
            >
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
