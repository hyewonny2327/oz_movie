import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import MyPage from "../pages/MyPage.jsx";
import App from "../App.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path="/details/:id" element={<MovieDetail />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
