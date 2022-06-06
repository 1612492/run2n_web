import logo from './images/logo.png';
import activityImage from './images/feature_activity.png';
import marketplaceImage from './images/feature_marketplace.png';
import runningImage from './images/feature_running.png';
import walletImage from './images/feature_wallet.png';
import sneaker1 from './images/sneaker_1.png';
import sneaker2 from './images/sneaker_2.png';
import sneaker3 from './images/sneaker_3.png';
import sneaker4 from './images/sneaker_4.png';
import sneaker5 from './images/sneaker_5.png';
import checkedImage from './images/checked.svg';
import notCheckedImage from './images/dot.svg';

function App() {
  return (
    <>
      <header className="header">
        <section class="container navbar">
          <a href="#home">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <input type="checkbox" id="fake-input" className="fake-input" />
          <label for="fake-input" className="toggle-button">
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </label>
          <nav class="nav">
            <a href="#features" className="nav-item">
              Features
            </a>
            <a href="#marketplace" className="nav-item">
              Marketplace
            </a>
            <a href="#roadmap" className="nav-item">
              Roadmap
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </nav>
        </section>
      </header>

      <main className="main">
        <section className="container">
          <section id="home" className="intro">
            <h3 className="heading">SOME HEADING HERE</h3>

            <p className="sub-heading">
              Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt
              ulabore et dolore magna aliqua.
            </p>

            <button className="intro__button">JOIN</button>
          </section>

          <section id="features" className="features">
            <h2 className="title">Features</h2>
            <article className="feature">
              <section className="feature__content-container">
                <h3 className="feature__title">RUN TO EARN</h3>
                <p className="feature__detail">
                  Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor
                  incididunt ulabore et dolore magna aliqua.
                </p>
              </section>
              <section className="feature__image-container">
                <img src={runningImage} alt="Run to earn" className="feature__image" />
              </section>
            </article>
            <article className="feature feature--reverse">
              <section className="feature__content-container">
                <h3 className="feature__title">NFT MARKETPLACE</h3>
                <p className="feature__detail">
                  Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor
                  incididunt ulabore et dolore magna aliqua.
                </p>
              </section>
              <section className="feature__image-container">
                <img src={marketplaceImage} alt="NFT Marketplace" className="feature__image" />
              </section>
            </article>
            <article className="feature">
              <section className="feature__content-container">
                <h3 className="feature__title">DECENTRALIZED WALLET</h3>
                <p className="feature__detail">
                  Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor
                  incididunt ulabore et dolore magna aliqua.
                </p>
              </section>
              <section className="feature__image-container">
                <img
                  src={walletImage}
                  alt="Decentralized wallet"
                  className="feature__small-image"
                />
              </section>
            </article>
            <article className="feature feature--reverse">
              <section className="feature__content-container">
                <h3 className="feature__title">TRACKING YOUR TRAINING</h3>
                <p className="feature__detail">
                  Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor
                  incididunt ulabore et dolore magna aliqua.
                </p>
              </section>
              <section className="feature__image-container">
                <img
                  src={activityImage}
                  alt="Tracking your training"
                  className="feature__small-image"
                />
              </section>
            </article>
          </section>

          <section id="marketplace" className="marketplace">
            <h2 className="title">NFT Marketplace</h2>
            <section className="sneakers">
              <article className="sneaker sneaker--red">
                <img src={sneaker1} alt="Sneaker 1" className="sneaker-image" />
              </article>
              <article className="sneaker sneaker--orange">
                <img src={sneaker2} alt="Sneaker 2" className="sneaker-image" />
              </article>
              <article className="sneaker sneaker--yellow">
                <img src={sneaker3} alt="Sneaker 3" className="sneaker-image" />
              </article>
              <article className="sneaker sneaker--green">
                <img src={sneaker4} alt="Sneaker 4" className="sneaker-image" />
              </article>
              <article className="sneaker sneaker--blue">
                <img src={sneaker5} alt="Sneaker 5" className="sneaker-image" />
              </article>
            </section>
          </section>

          <section id="roadmap" className="roadmap">
            <h2 className="title">Roadmap</h2>
            <section class="bullets">
              <article class="bullet">
                <img src={checkedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">LAUNCH</h5>
                  <p>Moonstar is born and a new journey start.</p>
                </article>
              </article>
              <article class="bullet">
                <img src={checkedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">INITIAL EXPOSURE</h5>
                  <p>Advertising, influencers marketing push</p>
                </article>
              </article>
              <article class="bullet">
                <img src={checkedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">CORE TEAM BUILDING</h5>
                  <p>We are at 50% at the moment and looking for some new members</p>
                </article>
              </article>
              <article class="bullet">
                <img src={notCheckedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">COMMUNITY 65%</h5>
                  <p>
                    Fudders and people that came for a quick buck are starting to leave out of
                    boredom, wholesome community is building
                  </p>
                </article>
              </article>
              <article class="bullet">
                <img src={notCheckedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">PRODUCT DEVELOPMENT 40%</h5>
                  <p>
                    We are working on a new website, talking with a dev to bring a dApp and NFT shop
                  </p>
                </article>
              </article>
              <article class="bullet">
                <img src={notCheckedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">FURTHER EXPOSURE</h5>
                  <p>We are preparing soon for a second marketing push</p>
                </article>
              </article>
              <article class="bullet">
                <img src={notCheckedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">PARTNERSHIPS 30%</h5>
                  <p>
                    We are in the talks with 2 big projects to collaborate with, this will boost us
                    even more than cmc and cg listing
                  </p>
                </article>
              </article>
              <article class="bullet">
                <img src={notCheckedImage} className="bullet__icon" />
                <article className="bullet__content">
                  <h5 className="roadmap__title">TO THE STARS</h5>
                  <p>Much more to come!</p>
                </article>
              </article>
            </section>
          </section>

          <section id="contact" className="contact">
            <h2 className="title">Contact</h2>
            <form className="form">
              <label for="email" className="form__label">
                Your email
              </label>
              <input id="email" type="email" className="form__input" />
              <label for="message" className="form__label">
                Your message
              </label>
              <textarea id="message" rows={10} className="form__input" />
              <button type="button" className="submit-button">
                Submit
              </button>
            </form>
          </section>
        </section>
      </main>
      <footer className="footer">
        <img src={logo} alt="logo" className="logo" />
        <p>Copyright 2022 © Run2Earn. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
