# 🐶 & 😺 React Mission 03 - PocketHost를 활용한 카카오프렌즈 상품 페이지 구현

## 결과

<img width="48%" height="1000px" alt="메인 페이지" src="https://github.com/ingbinsee/kakao-goods/assets/140426866/bc6c6e3d-e2c2-44f9-9eb1-5eedf3cbea13">
<img width="48%" height="1000px" alt="베스트 상품 페이지" src="https://github.com/ingbinsee/kakao-goods/assets/140426866/ad560572-1e1a-4695-9aca-1b4cf88334b8">
<img width="48%" height="1000px" alt="상품 상세 페이지" src="https://github.com/ingbinsee/kakao-goods/assets/140426866/c2a0cb51-76f9-4bd5-811e-fa393f2a04ae">
<img width="48%" height="1000px" alt="세숑 상품 페이지" src="https://github.com/ingbinsee/kakao-goods/assets/140426866/720ad3cb-87c3-4333-a1f4-354741a7a2d7">
<img width="48%" height="500px" alt="상품 추가 페이지" src="https://github.com/ingbinsee/kakao-goods/assets/140426866/3e6ebe07-78d1-48d3-85f2-037c0dd78fe4">

### [배포 사이트 바로가기](https://kakaogoods.vercel.app/)

## 활용

<img src="https://skillicons.dev/icons?i=react,tailwind,git,github"/>

## 주제

React 컴포넌트 간 상태 관리 및 데이터 패치, 데이터 캐시, 페이지 라우팅 등 학습한 것을 활용한 간단한 미니 프로젝트를 진행하고 배포합니다. <br />

- [Home.jsx 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/pages/Home.jsx)
- [Best.jsx 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/pages/Best.jsx)
- [GoodsDetail.jsx 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/pages/GoodsDetail.jsx)
- [Sesyong.jsx 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/pages/Sesyong.jsx)
- [Mochi.jsx 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/pages/Mochi.jsx)
- [GoodsNew.jsx 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/pages/GoodsNew.jsx)

- [useFetchData.js 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/hooks/useFetchData.js)
- [useGoodsList.js 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/hooks/useGoodsList.js)
- [useGoodsItem.js 바로가기](https://github.com/ingbinsee/kakao-goods/blob/main/src/hooks/useGoodsItem.js)

## 계획

- [x] 다양한 페이지를 참고하여 백엔드 데이터베이스를 활용할 수 있는 주제를 선정합니다.
- [x] 주제를 선정한 후, 구현할 페이지를 선별합니다.
- [x] PocketHost를 활용하여 데이터를 구성합니다.
- [x] 페이지 내 재사용이 가능한 컴포넌트는 아토믹 컴포넌트로 구성합니다.
- [x] 페이지별로 구성한 컴포넌트를 조립하고 필요한 데이터를 연결합니다.
- [x] PocketHost를 활용하여 데이터 읽기/쓰기 기능을 구현합니다.
- [x] react-router-dom을 활용하여 <abbr title="Single Page Application">SPA</abbr>를 구현합니다.
- [x] react-helmet-async를 활용하여 페이지별 title을 지정합니다.
- [x] prop-types를 활용하여 컴포넌트 속성 검사를 진행합니다.
- [x] vercel을 활용하여 페이지를 배포합니다.

## 기능

- 홈페이에서 '상품 보러가기' 버튼을 클릭하면 베스트 상품 페이지로 이동합니다.
- 홈페이지에서 '상품 추가하기' 버튼을 클릭하면 새로운 상품을 등록할 수 있는 페이지로 이동합니다.
- 상품 등록 페이지에서 상품명, 가격, 사진을 등록 시 실시간으로 상품이 등록됩니다.
- 상품이 정상적으로 등록되었을 때 '상품 등록에 성공했습니다!'라는 안내 문구가 나옵니다.
- 상품 등록 페이지에서 취소 버튼을 누를 시 작성한 데이터가 초기화됩니다.
- 메뉴에서 '베스트'를 클릭 시 PocketHost에 등록된 전체 상품을 보여줍니다.
- 메뉴에서 '세숑' 또는 '모찌'를 클릭 시 해당 카테고리에 해당하는 상품을 필터링하여 보여줍니다.
- 상품 클릭 시 상품 상세 페이지로 이동합니다.
- 상품 상세 페이지에서 이전으로 이동하는 버튼 클릭 시 베스트 상품 페이지로 이동합니다.

## 데이터 가져오기

### useFetchData.js

```js
import {useEffect, useState} from 'react';

const defaultOptions = {
  method: 'GET',
};

function useFetchData(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          ...defaultOptions,
          ...options,
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return {data, isLoading, error};
}

export default useFetchData;
```

### useGoodsList.js

```js
import useFetchData from './useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API}/collections/goods/records`;

function useGoodsList() {
  return useFetchData(endpoint);
}

export default useGoodsList;
```

### useGoodsItem.js

```js
import useFetchData from './useFetchData';

const getEndpoint = (productId) =>
  `${import.meta.env.VITE_PB_API}/collections/goods/records/${productId}`;

function useGoodsItem(productId) {
  return useFetchData(getEndpoint(productId));
}

export default useGoodsItem;
```

## 페이지

### 홈

```jsx
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
```

### 베스트 상품

```jsx
import Spinner from '@/components/Spinner';
import useGoodsList from '@/hooks/useGoodsList';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import {getPbImageURL} from '@/utils/getPBImageURL';
import {numberWithComma} from '@/utils/numberWithComma';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

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
```

### 상품 상세

```jsx
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
```

### 캐릭터별 상품

```jsx
import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import {getPbImageURL} from '@/utils/getPBImageURL';
import {numberWithComma} from '@/utils/numberWithComma';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

const filterTitle = "filter=(title~'세숑')";

function Sesyong() {
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
          <title>세숑 상품보기</title>
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

export default Sesyong;
```

```jsx
import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import {getPbImageURL} from '@/utils/getPBImageURL';
import {numberWithComma} from '@/utils/numberWithComma';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

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
```

### 상품 등록

```jsx
import pb from '@/api/pocketbase';
import Header from '@/layout/Header';
import {useRef} from 'react';
import {Helmet} from 'react-helmet-async';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function GoodsNew() {
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const photoRef = useRef(null);
  const uploadPhotoRef = useRef(null);

  const navigate = useNavigate();

  const handleRegisterGoods = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('price', Number(priceRef.current.value));
    formData.append('photo', photoRef.current.files[0]);

    try {
      await pb.collection('goods').create(formData);
      toast.success('상품 등록에 성공했습니다!', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate('/best');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisplayUploadPhoto = (e) => {
    const photoFile = e.target.files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    uploadPhotoRef.current.setAttribute('src', photoUrl);
  };

  return (
    <>
      <Helmet>
        <title>상품 등록</title>
      </Helmet>
      <Header />
      <div className="flex flex-col gap-6">
        <h2 className="bg-yellow-500 text-white w-[150px] text-center font-semibold mx-auto mt-6 py-1 rounded-xl">
          상품 등록
        </h2>
        <form encType="multipart/form-data" onSubmit={handleRegisterGoods}>
          <div className="mt-4">
            <label htmlFor="title" className="pr-2 font-semibold text-lg">
              상품명
            </label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              id="title"
              placeholder="상품명을 입력해 주세요."
              className="border border-slate-400 rounded-md pl-2 px-[360px] py-1"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="price" className="pr-6 font-semibold text-lg">
              가격
            </label>
            <input
              ref={priceRef}
              type="text"
              name="price"
              id="price"
              placeholder="숫자로 입력해 주세요."
              className="border border-slate-400 rounded-md pl-2 px-[360px] py-1"
            />
          </div>
          <div className="relative flex flex-col gap-2 mt-4">
            <label htmlFor="photo" className="pr-2 font-semibold text-lg">
              사진
            </label>
            <input
              ref={photoRef}
              onChange={handleDisplayUploadPhoto}
              className="cursor-pointer absolute w-full h-full opacity-0"
              type="file"
              name="photo"
              id="photo"
              accept="*.jpg,*.png,*.webp,*.avif"
              multiple
            />
            <div className="h-[140px] bg-slate-200/80 p-2">
              <img
                ref={uploadPhotoRef}
                className="h-[124px] border border-slate-400/50"
                src="https://shorturl.at/hqBG2"
                alt="placeholder 이미지"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="border-2 border-slate-400 text-black w-[50px] text-center font-medium py-1 rounded-xl hover:border-yellow-400"
            >
              등록
            </button>
            <button
              type="reset"
              className="border-2 border-slate-400 text-black w-[50px] text-center font-medium py-1 rounded-xl hover:border-yellow-400"
              onClick={() => {
                uploadPhotoRef.current.src = 'https://shorturl.at/hqBG2';
              }}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GoodsNew;
```

## 소감

- 데이터를 등록하고 이를 읽고 쓰는 과정을 통해 데이터를 관리하는 방법에 대해 익힐 수 있었습니다.
- Query parameters를 활용하니 코드를 길게 작성하지 않아도 원하는 데이터만을 간편하게 가져올 수 있었습니다.
- useFetchData, useGoodsList, useGoodsItem과 같이 커스텀 훅을 만들고 이를 활용하는 방법을 학습할 수 있었습니다.
- pockethost, prop-types, react-hot-toast, react-router-dom, react-helmet-async 등을 적재적소에 다양하게 활용해볼 수 있었습니다.
- 데이터베이스를 기반으로 페이지 구성 시 build와 preview에서는 정상적으로 보이는 것이 페이지 배포 시 보이지 않는 현상이 발생하였습니다. 이에 따라 임시방편으로 `.env.local` 파일을 작업한 파일과 함께 같이 올려 해결하였으나 `.env.local` 파일을 업로드하지 않고 배포하는 방법을 확인하는 것이 필요합니다.
- 추후 데이터 삭제/업데이트, 사용자 인증 등 추가적인 기능 구현이 요구됩니다.