import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import {Helmet} from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';

function Home() {
  return (
    <>
      <Helmet>
        <title>세숑과 모찌</title>
      </Helmet>
      <Header />
      <img src="/hero.webp" alt="세숑과 모찌 메인 사진" className="m-auto" />
      <Link
        to="/best"
        className="block text-xl font-medium bg-yellow-300 text-center rounded-full mt-5 py-4 hover:bg-yellow-500"
      >
        상품 보러가기
      </Link>
      <Link
        to="/new"
        className="block text-xl font-medium bg-green-400 text-center rounded-full mt-5 py-4 hover:bg-green-600"
      >
        상품 추가하기
      </Link>
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
