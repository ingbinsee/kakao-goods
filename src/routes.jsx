import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Best from './pages/Best';
import Home from './pages/Home';
import Mochi from './pages/Mochi';
import Sesyong from './pages/Sesyong';
import GoodsDetail from './pages/GoodsDetail';
import GoodsNew from './pages/GoodsNew';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="best" element={<Best />} />
      <Route path="sesyong" element={<Sesyong />} />
      <Route path="mochi" element={<Mochi />} />
      <Route path="goods/:productId" element={<GoodsDetail />} />
      <Route path="/new" element={<GoodsNew />} />
    </>
  )
);

export default router;
