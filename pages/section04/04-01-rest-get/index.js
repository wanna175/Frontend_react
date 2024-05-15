import axios from "axios"; //axios는 rest api를 이용할 수 있게 한다.

export default function RestGetPage() {
  // function onClickAsync(){
  //     const result = axios.get("http://koreanjson.com/posts/1");
  //     console.log(result);//기본적으로 axios는 비동기작동한다. 즉, get요청하고 바로 result에 promise(나중에 줄께라는 약속)담고 넘어가 버린다.
  // }
  // async function onClickSync(){
  //     const result = await axios.get("http://koreanjson.com/posts/1");
  //     console.log(result);//async await를 통해 동기화 가능
  // }=>함수 명이 곂쳐도 실행가능...예기치못한 버그 발생
  const onClickSync = () => {
    const result = axios.get("http://koreanjson.com/posts/1");
    console.log(result);
  };
  const onClickAsync = async () => {
    const result = await axios.get("http://koreanjson.com/posts/1");
    console.log(result);
  };
  return (
    <div>
      <button onClick={onClickSync}>Rest-API(비동기) 요청하기</button>
      <button onClick={onClickAsync}>Rest-API(동기) 요청하기</button>
    </div>
  );
}
