import sneaker1 from '../images/sneaker_1.png';
import sneaker2 from '../images/sneaker_2.png';
import sneaker3 from '../images/sneaker_3.png';
import sneaker4 from '../images/sneaker_4.png';
import sneaker5 from '../images/sneaker_5.png';

function Marketplace() {
  return (
    <section id="marketplace" className="marketplace">
      <h2 className="title">NFT Marketplace</h2>
      <section className="sneakers">
        <article className="sneaker sneaker--red">
          <img src={sneaker1} alt="Sneaker 1" className="sneaker-image" />
        </article>
        <article className="sneaker sneaker--yellow">
          <img src={sneaker2} alt="Sneaker 2" className="sneaker-image" />
        </article>
        <article className="sneaker sneaker--green">
          <img src={sneaker3} alt="Sneaker 3" className="sneaker-image" />
        </article>
        <article className="sneaker sneaker--blue">
          <img src={sneaker4} alt="Sneaker 4" className="sneaker-image" />
        </article>
        <article className="sneaker sneaker--violet">
          <img src={sneaker5} alt="Sneaker 5" className="sneaker-image" />
        </article>
      </section>
    </section>
  );
}

export default Marketplace;
