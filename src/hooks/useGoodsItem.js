import useFetchData from './useFetchData';

const getEndpoint = (productId) =>
  `${import.meta.env.VITE_PB_API}/collections/goods/records/${productId}`;

function useGoodsItem(productId) {
  return useFetchData(getEndpoint(productId));
}

export default useGoodsItem;
