import './App.css';
import './fonts/Rubik Regular 400.ttf';
import './fonts/Krub Regular 400.ttf';
import Logo from './images/Logo.png';
import icon1 from './images/Icon (5).png';
import icon2 from './images/Icon (6).png';
import icon3 from './images/Icon (7).png';
import instagram from './images/Instagram.png';
import facebook from './images/Facebook.png';
import twitter from './images/Twitter.png';
import linkedin from './images/Linkdin.png';
import subtext from './images/Sub Text.png';
import subtext2 from './images/Sub Text (1).png';
import content from './images/Content.png';
import about from './images/About.png';
import counter from './images/Counter.png';
import pic1 from './images/1.png';
import pic2 from './images/2.png';
import pic3 from './images/3.png';
import pic4 from './images/4.png';
import pic5 from './images/5.png';
import testimonial from './images/Sub Text (2).png';
import pic6 from './images/User.png';
import pic7 from './images/Image.png';
import pic8 from './images/Content (1).png';
import pic9 from './images/1 (1).png';
import pic10 from './images/2 (1).png';
import pic11 from './images/3 (1).png';
import team from './images/Sub Text (3).png';
import contact from './images/Sub Text (4).png';
import form from './images/Form.png';
import clientlogo from './images/Client Logo.png';
import subtext3 from './images/Sub Text (5).png';
import news1 from './images/news (1).png';
import news2 from './images/news (2).png';
import news3 from './images/news (3).png';
import photo from './images/Photo (1).png';

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

      <nav className="navbar navbar-expand-lg d-flex justify-content-center bg-primary">
        <div className="navbar-container">
          <ul className="navbar-nav font2">
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
            <button type="button" className="btn btn-light button1 font2">
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
              className="banner-intro text-light ps-5 font1"
              style={{
                width: '554px',
              }}
            >
              Your Gateway
              to any Destination in the World
            </h1>
            <p className="text-light ps-5 banner-paragragh font2">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum.
              Nunc faucibus, nisl id dapibus finibus,
              enim diam interdum nulla, sed laoreet risus lectus.
            </p>
            <button type="button" className="btn btn-light button2 ms-5 font2">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="about">
        <div className="container-fluid ms-4">
          <div className="row mt-5 p-4 d-flex justify-content-center">
            <div className="col-md-6">
              <div className="about-text">
                <img src={subtext2} alt="subtext2" />
                <h1 className="about-intro font1">Safe & Reliable Cargo Solutions</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content">
                <img src={content} alt="content" className="content" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services mt-4">
        <div className="container-fluid">
          <div className="service d-flex justify-content-center">
            <div className="service-container">
              <img src={about} alt="about" className="service" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <img src={counter} alt="counter" className="counter" />
          </div>
        </div>
      </section>

      <section className="transport">
        <div className="transport-container">
          <div className="transport-text d-flex justify-content-center">
            <h1 className="transport-intro font1">Transporting Across The World</h1>
          </div>

          <div className="transport-pictures d-flex justify-content-center">
            <div className="row row-cols-5 g-1">
              <div className="col">
                <img src={pic1} alt="pic1" className="transport-pic" />
              </div>
              <div className="col">
                <img src={pic2} alt="pic2" className="transport-pic" />
              </div>
              <div className="col">
                <img src={pic3} alt="pic3" className="transport-pic" />
              </div>
              <div className="col">
                <img src={pic4} alt="pic4" className="transport-pic" />
              </div>
              <div className="col">
                <img src={pic5} alt="pic5" className="transport-pic" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="btn btn-light text-light button3 font2">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}

      <section className="customer-reviews">
        <div className="customer-reviews-container ps-5 justify-content-center">
          <div className="customer-reviews-testimonial">
            <img src={testimonial} alt="testimonial" />
          </div>
          <div className="customer-reviews-text mb-5 ">
            <h1 className="customer-reviews-intro font1">What Our Customer Say</h1>
          </div>
          <div className="customer-reviews-content ">
            <img src={pic6} alt="pic6" />
          </div>
        </div>
      </section>

      <section className="opportunity">
        <div className="opportunity-container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={pic7} alt="pic7" className="opportunity-pic" />
            </div>
            <div className="col-md-6 second-col d-flex justify-content-center">
              <img src={pic8} alt="pic8" className="second-col-pic" />
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="team-container text-center mt-5">
          <div className="team-text">
            <img src={team} alt="team" />
          </div>
          <div className="team-text">
            <h1 className="team-intro font1">Meet Expert Team</h1>
          </div>
          <div className="row row-cols-3 mt-5">
            <div className="col">
              <img src={pic9} alt="pic9" className="team-pic" />
            </div>
            <div className="col">
              <img src={pic10} alt="pic10" className="team-pic" />
            </div>
            <div className="col">
              <img src={pic11} alt="pic11" className="team-pic" />
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-container">
          <div className="row ps-5 ">
            <div className="col-md-6 mt-5">
              <img src={contact} alt="contact" className="contact" />

              <div className="footer-text">
                <h1 className="footer-intro text-light font1">Get in touch with us</h1>
                <p className="footer-paragragh text-light font2">
                  Leverage agile frameworks to provide a robust synopsis for strategy foster
                  collaborative thinking to further the overall value.
                </p>
                <ul className="footer-list g-2 font2">
                  <li className="footer-list-item text-light">
                    <i>
                      <img src={icon2} alt="icon2" />
                    </i>
                    Email contact@logistics.com
                  </li>
                  <li className="footer-list-item text-light">
                    <i>
                      <img src={icon3} alt="icon3" />
                    </i>
                    Call Us (00) 112 365 489
                  </li>
                  <li className="footer-list-item text-light">
                    <i>
                      <img src={icon1} alt="icon1" />
                    </i>
                    Mon - Sat 9.00 - 18.00 Sunday Closed
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <img src={form} alt="form" className="form" />
            </div>

            <div className="d-flex justify-content-center mt-5">
              <img src={clientlogo} alt="clientlogo" className="clientlogo" />
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="news-container">
          <div className="news-text text-center mt-5">
            <div className="news content ">
              <img src={subtext3} alt="subtext3" className="subtext3" />
              <h1 className="news-intro font1">Our Latest News</h1>
            </div>
            <div className="row mt-5">
              <div className="col">
                <img src={news1} alt="news1" className="news-pic" />
              </div>
              <div className="col">
                <img src={news2} alt="news2" className="news-pic" />
              </div>
              <div className="col">
                <img src={news3} alt="news3" className="news-pic" />
              </div>
            </div>
            <button type="button" className="btn text-light button4 mt-5">
              More Blog
            </button>
          </div>
        </div>
      </section>

      <section className="footer2 mt-5">
        <img src={photo} alt="bg-pic" className="photo" />
      </section>
    </div>

  );
}

export default App;
