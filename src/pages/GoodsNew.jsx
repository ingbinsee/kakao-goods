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
            <label htmlFor="photo" className='pr-2 font-semibold text-lg'>사진</label>
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
            <button type="submit" className='border-2 border-slate-400 text-black w-[50px] text-center font-medium py-1 rounded-xl hover:border-yellow-400'>등록</button>
            <button
              type="reset"
              className='border-2 border-slate-400 text-black w-[50px] text-center font-medium py-1 rounded-xl hover:border-yellow-400'
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
