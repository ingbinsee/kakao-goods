import '@/styles/tailwind.css';
import {RouterProvider} from 'react-router-dom';
import router from './routes';
import {HelmetProvider} from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <HelmetProvider>
        <div className="m-auto max-w-[600px]">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
