import { useState } from "react";
import Input from "../components/Input";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";

function SignupPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { signUp } = useEmailAuth();
  async function handleClickSignupButton() {
    console.log(userEmail, userPassword);
    signUp({ email: userEmail, password: userPassword });
  }
  return (
    <div>
      <div>회원가입</div>
      <Input
        type="email"
        id="userEmail"
        label="이메일"
        value={userEmail}
        onChange={setUserEmail}
        placeholder="이메일을 입력하세요"
        errorMessage="이메일 형식으로 작성해주세요."
      />
      <Input
        type="text"
        id="userName"
        label="이름"
        value={userName}
        onChange={setUserName}
        placeholder="이름을 입력하세요"
        errorMessage="이름을 입력해주세요"
      />
      <Input
        type="password"
        id="userPassword"
        label="비밀번호"
        value={userPassword}
        onChange={setUserPassword}
        placeholder="비밀번호를 입력하세요"
        errorMessage="비밀번호를 입력해주세요"
      />
      <div onClick={handleClickSignupButton}>회원가입 버튼</div>
    </div>
  );
}

export default SignupPage;
