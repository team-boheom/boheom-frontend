import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const OutletRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default OutletRouter;
