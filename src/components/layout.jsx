import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
