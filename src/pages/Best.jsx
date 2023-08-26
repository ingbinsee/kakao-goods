import Spinner from '@/components/Spinner';
import useGoodsList from '@/hooks/useGoodsList';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { getPbImageURL } from '@/utils/getPBImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Best() {
  const {isLoading, data} = useGoodsList();

  if (isLoading) {
    return <Spinner size={160} className="m-auto bg-white block" />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>베스트 상품</title>
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
                      <span className="text-sm font-semibold">
                        {numberWithComma(item.price)}원
                      </span>
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

export default Best;
