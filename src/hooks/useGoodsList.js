import useFetchData from './useFetchData';

const endpoint =
  `${import.meta.env.VITE_PB_API}/collections/goods/records`;

function useGoodsList() {
  return useFetchData(endpoint);
}

export default useGoodsList;
