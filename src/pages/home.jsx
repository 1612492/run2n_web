import Intro from '../components/intro';
import Video from '../components/video';
import Features from '../components/features';
import Marketplace from '../components/marketplace';
import Roadmap from '../components/roadmap';
import Testnet from '../components/testnet';
import Contact from '../components/contact';
import Main from '../components/main';

function Home() {
  return (
    <Main>
      <Intro />
      <Video />
      <Features />
      <Marketplace />
      <Roadmap />
      <Testnet />
      <Contact />
    </Main>
  );
}

export default Home;
