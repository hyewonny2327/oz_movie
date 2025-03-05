import { useEffect } from "react";
import useUser from "../hooks/useUserInfo";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const { userInfo } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("userInfo", userInfo);
    if (!userInfo) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate, userInfo]);
  return (
    <>
      {userInfo && (
        <div>
          <div>myPage</div>
        </div>
      )}
    </>
  );
}

export default MyPage;
