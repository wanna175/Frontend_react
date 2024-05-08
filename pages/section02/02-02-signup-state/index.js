import { useState } from "react";
export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    console.log(event); //나의 행동
    console.log(event.target); //작동된 태그
    console.log(event.target.value); //작동된 태그의 값.
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignUp(event) {
    //1.이멜검증하기
    if (email.includes("@") === false) {
      //alert("이메일이 올바르지 않습니다.")
      // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다."=======>옛날방식
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      //2.백엔드 컴퓨터에 보냊주기(백엔드 개발자가 만든 함수 API)
      //=>이건 아직... 나중에 더 배우고

      //3.성공알람 보여주기
      alert("회원가입을 축하합니다!");
    }
  }
  /*onClick, onChange같은 곳에 할당된,
     즉 바인딩된 함수들은 event값을 변수로 받을 수 있다.
     이런 함수들을 eventHandler function이라고 부른다.*/
  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id='myerror'></div> ========>옛날방식*/}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  );
}
