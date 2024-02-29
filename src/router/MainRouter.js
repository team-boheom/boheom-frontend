import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/Main';
import MyPage from '../pages/MyPage';
import PostPage from '../pages/Post';
import CreatePostPage from '../pages/CreatePost';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import OutletRouter from './OutlitRouter';
import Landing from '../pages/Landing';
import DetailPost from '../pages/DetailPost';
import CorrectionPost from '../pages/CorrectionPost';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<OutletRouter />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/post">
            <Route path="" element={<PostPage />} />
            <Route path=":id" element={<DetailPost />} />
          </Route>
          <Route path="/correction/:id" element={<CorrectionPost />} />
          <Route path="/CreatePost" element={<CreatePostPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
