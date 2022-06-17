import activityImage from '../images/feature_activity.png';
import marketplaceImage from '../images/feature_marketplace.png';
import runningImage from '../images/feature_running.png';
import walletImage from '../images/feature_wallet.png';

function Features() {
  return (
    <section id="features" className="features">
      <h2 className="title">Features</h2>
      <article className="feature">
        <section className="feature__content-container">
          <h3 className="feature__title">RUN TO EARN</h3>
          <p className="feature__detail">
            Once you own the sneaker NFT, you can start working out, participate in the app and earn
            our in-app cryptocurrency.
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
            Marketplace is where users can buy or sell NFT sneakers.
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
            Wallet is built right into the app and support BNB chain.
          </p>
        </section>
        <section className="feature__image-container">
          <img src={walletImage} alt="Decentralized wallet" className="feature__image" />
        </section>
      </article>
      <article className="feature feature--reverse">
        <section className="feature__content-container">
          <h3 className="feature__title">TRACKING YOUR TRAINING</h3>
          <p className="feature__detail">Tracking your activity information and visualize it.</p>
        </section>
        <section className="feature__image-container">
          <img src={activityImage} alt="Tracking your training" className="feature__image" />
        </section>
      </article>
    </section>
  );
}

export default Features;
