import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/Main';
import MyPage from '../pages/MyPage';
import PostPage from '../pages/Post';
import CreatePostPage from '../pages/CreatePost';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post">
          <Route path="" element={<PostPage />} />
          <Route path=":id" element={<MyPage />} />
        </Route>
        <Route path="/createPost" element={<CreatePostPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
