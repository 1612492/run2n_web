import bulletIcon from '../images/paper-airplane.svg';
import downloadIcon from '../images/download.svg';

function Testnet() {
  return (
    <section id="testnet" className="testnet">
      <h2 className="title">Testnet</h2>
      <section className="testnet__links">
        <p className="testnet__text">
          <img src={bulletIcon} alt="icon" className="testnet__bullet" />
          <span>Request token to buy box</span>
          <a
            href="https://faucet.run2n.io"
            target="_blank"
            rel="noreferrer"
            className="testnet__link"
          >
            here
          </a>
        </p>
        <p className="testnet__text">
          <img src={bulletIcon} alt="icon" className="testnet__bullet" />
          <span>Request BNB to pay for transaction fee</span>
          <a
            href="https://testnet.binance.org/faucet-smart"
            target="_blank"
            rel="noreferrer"
            className="testnet__link"
          >
            here
          </a>
        </p>
        <a
          href="https://drive.google.com/file/d/1KkkxqP_7Nnid-vZjOKnvFAsQDxtQNkOX/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="download-button"
        >
          <img src={downloadIcon} alt="icon" />
          Download
        </a>
      </section>
    </section>
  );
}

export default Testnet;
