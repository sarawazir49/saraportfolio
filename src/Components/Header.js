import { Link } from 'react-router-dom';
import sarad from '../images/sarad.png';
const Header = () => {
  return (
    <header>
      <div className="container1">
        {/* ✅ Image at the top */}
        <img
          src={sarad}
          alt="Top Banner"
          className="top-image"
        />

        <div className="scroll-down">
          <a href="#menu">
            <h3 className="scroll-down-text">
              Scroll down <i className="fa fa-angle-double-down"></i>
            </h3>
          </a>
        </div>
      </div>

      <section id="menu">
        <div className="wrapper">
          <nav className="navigation">
            <ul className="menu">
              <li className="Home">
                <Link className="links" to="/">Home</Link>
              </li>
              <li className="About">
                <Link className="links" to="/about">About</Link>
              </li>
              <li className="Cv">
                <Link className="links" to="/cv">Cv</Link>
              </li>
              <li className="Contact">
                <Link className="links" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
