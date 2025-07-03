import {Link} from 'react-router-dom';

const   Header= ()=>{
    return  (
    <header>
      <div className="container1">
 <div class="hero">
  <h1>SARAD</h1>
  <a href="#section2" class="scroll-down">Scroll down ↓</a>
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