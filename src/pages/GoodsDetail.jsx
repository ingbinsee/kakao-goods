import prev from '@/assets/prev.svg';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Spinner from '@/components/Spinner';
import useGoodsItem from '@/hooks/useGoodsItem';
import Footer from '@/layout/Footer';
import {getPbImageURL} from '@/utils/getPBImageURL';
import {numberWithComma} from '@/utils/numberWithComma';
import {Helmet} from 'react-helmet-async';
import {Link, useNavigate, useParams} from 'react-router-dom';

function GoodsDetail() {
  const navigate = useNavigate();

  const {productId} = useParams();

  const {isLoading, data} = useGoodsItem(productId);

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>상품 상세보기</title>
        </Helmet>
        <div className="flex flex-row-reverse items-center">
          <Heading />
          <button
            type="button"
            onClick={() => {
              navigate('/best');
            }}
          >
            <img src={prev} alt="이전으로" />
          </button>
        </div>

        <figure>
          <img src={getPbImageURL(data, 'photo')} alt="" />
          <figcaption className="flex flex-col">
            <h2 className="text-2xl font-semibold">{data.title}</h2>
            <span className="text-lg py-2 font-medium text-slate-600">
              {numberWithComma(data.price)}원
            </span>
          </figcaption>
        </figure>
        <Link
          to=""
          className="block bg-rose-500 text-white text-center rounded-full mt-5 py-4"
        >
          <Button
            type="button"
            text="구매하기"
            className="text-xl font-medium"
          />
        </Link>
        <Footer />
      </>
    );
  }
}

export default GoodsDetail;
