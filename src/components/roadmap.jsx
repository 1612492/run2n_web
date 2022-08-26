import dotIcon from '../images/dot.svg';
import checkedIcon from '../images/checked.svg';

function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <h2 className="title">Roadmap</h2>
      <section className="roadmap__body">
        <article className="roadmap__row">
          <div className="roadmap__row-left"></div>
          <div className="roadmap__row-mid">
            <div className="bullet" />
          </div>
          <div className="roadmap__row-right">
            <div className="roadmap__card">
              <p className="roadmap__title">MAY 2022</p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Project Kickstart
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Building team
              </p>
            </div>
          </div>
        </article>
        <article className="roadmap__row">
          <div className="roadmap__row-left">
            <div className="roadmap__card">
              <p className="roadmap__title">JUNE 2022</p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> UI/UX Design
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Smart contract
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Game Mechanism & Documents
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Integrate Binance Smart Chain
              </p>
            </div>
          </div>
          <div className="roadmap__row-mid">
            <div className="bullet" />
          </div>
          <div className="roadmap__row-right"></div>
        </article>
        <article className="roadmap__row">
          <div className="roadmap__row-left"></div>
          <div className="roadmap__row-mid">
            <div className="bullet" />
          </div>
          <div className="roadmap__row-right">
            <div className="roadmap__card">
              <p className="roadmap__title">JULY 2022</p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Marketing kickoff
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Internal bugs fixing
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Marketplace in-app
              </p>
            </div>
          </div>
        </article>
        <article className="roadmap__row">
          <div className="roadmap__row-left">
            <div className="roadmap__card">
              <p className="roadmap__title">Q3 2022</p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Community Growth
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Public testnet app
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#10004;</span> Collect feedback and improve
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Security improvement
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> IDO
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Mainnet Phase 1
              </p>
            </div>
          </div>
          <div className="roadmap__row-mid">
            <div className="bullet" />
          </div>
          <div className="roadmap__row-right"></div>
        </article>
        <article className="roadmap__row">
          <div className="roadmap__row-left"></div>
          <div className="roadmap__row-mid">
            <div className="bullet" />
          </div>
          <div className="roadmap__row-right">
            <div className="roadmap__card">
              <p className="roadmap__title">Q4 2022</p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Arena feature
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Group feature
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Mainnet Phase 2
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Collab expand
              </p>
            </div>
          </div>
        </article>
        <article className="roadmap__row">
          <div className="roadmap__row-left">
            <div className="roadmap__card">
              <p className="roadmap__title">2023 & beyond</p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Side-chain to scalable
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> DAO
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Shoe renting feature
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Staking feature
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Social feature
              </p>
              <p className="roadmap__text">
                <span className="checked-icon">&#8226;</span> Mainnet Phase 3
              </p>
            </div>
          </div>
          <div className="roadmap__row-mid">
            <div className="bullet" />
          </div>
          <div className="roadmap__row-right"></div>
        </article>
      </section>
    </section>
  );
}

export default Roadmap;
