import checkedImage from '../images/checked.svg';
import notCheckedImage from '../images/dot.svg';

function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <h2 className="title">Roadmap</h2>
      <section className="bullets">
        <article className="bullet">
          <img src={checkedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">LAUNCH</p>
            <p>Run2n is born and a new journey start.</p>
          </article>
        </article>
        <article className="bullet">
          <img src={checkedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">INITIAL EXPOSURE</p>
            <p>Advertising, influencers marketing push</p>
          </article>
        </article>
        <article className="bullet">
          <img src={checkedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">CORE TEAM BUILDING</p>
            <p>We are at 50% at the moment and looking for some new members</p>
          </article>
        </article>
        <article className="bullet">
          <img src={checkedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">PRODUCT DEVELOPMENT 60%</p>
            <p>Research game and NFTs</p>
            <p>Initial development of gameplay and NFTs</p>
            <p>Support Binance Smart Chain (BSC) </p>
          </article>
        </article>
        <article className="bullet">
          <img src={notCheckedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">COMMUNITY 65%</p>
            <p>
              Fudders and people that came for a quick buck are starting to leave out of boredom,
              wholesome community is building
            </p>
          </article>
        </article>
        <article className="bullet">
          <img src={notCheckedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">FURTHER EXPOSURE</p>
            <p>We are preparing soon for a second marketing push</p>
          </article>
        </article>
        <article className="bullet">
          <img src={notCheckedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">PARTNERSHIPS 30%</p>
            <p>Run testnet, IEO/IDO</p>
            <p>Run Open Beta (Android, IOS)</p>
            <p>Open marketplace</p>
          </article>
        </article>
        <article className="bullet">
          <img src={notCheckedImage} alt="bullet" className="bullet__icon" />
          <article className="bullet__content">
            <p className="roadmap__title">IN THE FUTURE</p>
            <p>Much more to come!</p>
          </article>
        </article>
      </section>
    </section>
  );
}

export default Roadmap;
