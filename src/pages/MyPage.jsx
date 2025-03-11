import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/userProvider';
function MyPage() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('userInfo', userInfo);
    if (!userInfo) {
      alert('로그인이 필요합니다.');
      navigate('/login');
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
