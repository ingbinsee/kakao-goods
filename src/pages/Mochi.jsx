import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { getPbImageURL } from '@/utils/getPBImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const filterTitle = "filter=(title~'모찌')";

function Mochi() {
  const {isLoading, data} = useFetchData(
    `${import.meta.env.VITE_PB_API}/collections/goods/records?${filterTitle}`
  );

  if (isLoading) {
    return <Spinner size={160} className="m-auto bg-white block" />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>모찌 상품보기</title>
        </Helmet>
        <Header />
        <div>
          <ul className="grid grid-cols-3 gap-12">
            {data.items?.map((item) => (
              <li key={item.id}>
                <Link to={`/goods/${item.id}`}>
                  <figure>
                    <img
                      src={getPbImageURL(item, 'photo')}
                      alt={item.title}
                      className="object-cover mx-auto"
                    />
                    <figcaption className="flex flex-col gap-1 items-center">
                      <span>{item.title}</span>
                      <span>{numberWithComma(item.price)}원</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default Mochi;
