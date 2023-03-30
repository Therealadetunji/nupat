import './App.css';
import Logo from './images/Logo.png';
import icon1 from './images/Icon (5).png';
import icon2 from './images/Icon (6).png';
import icon3 from './images/Icon (7).png';
import instagram from './images/Instagram.png';
import facebook from './images/Facebook.png';
import twitter from './images/Twitter.png';
import linkedin from './images/Linkdin.png';
import subtext from './images/Sub Text.png';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center justify-content-center">
        <div className="header d-flex text-center align-items-center">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="text-light nav-list">
            <li>
              <i>
                <img src={icon1} alt="icon1" />
              </i>
              Mon - Sat 9.00 - 18.00 Sunday Closed
            </li>
            <li>
              <i>
                <img src={icon2} alt="icon2" />
              </i>
              Email contact@logistics.com
            </li>
            <li>
              <i>
                <img src={icon3} alt="icon3" />
              </i>
              Call Us (00) 112 365 489
            </li>
          </ul>
        </div>
      </header>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg d-flex justify-content-center">
        <div className="navbar-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <div className="border" />
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contact
              </a>
            </li>
          </ul>

          <div className="social-media">
            <i>
              <img src={instagram} alt="instagram" />
            </i>
            <i>
              <img src={facebook} alt="facebook" />
            </i>
            <i>
              <img src={twitter} alt="twitter" />
            </i>
            <i>
              <img src={linkedin} alt="linkedin" />
            </i>
            <button type="button" className="btn btn-light button1">
              Request Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Banner */}

      <section className="banner">
        <div className="banner-container">
          <div className="banner-text">
            <img src={subtext} alt="subtext" className="ps-5" />
            <h1
              className="banner-intro text-light ps-5"
              style={{
                width: '554px',
              }}
            >
              Your Gateway
              to any Destination in the World
            </h1>
            <p className="text-light ps-5 banner-paragragh">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum.
              Nunc faucibus, nisl id dapibus finibus,
              enim diam interdum nulla, sed laoreet risus lectus.
            </p>
            <button type="button" className="btn btn-light button2 ms-5">
              Explore More
            </button>
          </div>
        </div>
      </section>

    </div>

  );
}

export default App;
