import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  //componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);
  //componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });
  //componentWillUnmount와 동일
  useEffect(() => {
    return () => {
      console.log("그려지고 나서 실행");
    };
  }, []);

  //1.useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행and []에 값이 바뀔때마다 실행");
    return () => {
      console.log("그려지고 나서 실행");
    };
  }, [count]); //배열의 의미?? 없으면 걍 첨이든 변경되면 무조건 실행, 있으면 배열에 있는 값이 바뀔때만 실행
  //2.useEffect잘못된 사용법(1.setState를 하면 추가랜더링이 되거나 무한루프에 빠질수 있다.)
  //이 파일이 싹 랜더링이 된후에 useEffect가 실행이 된다.
  //useEffect(()=>{setCount((prev)=>prev+1);},[count]);무한루프에 빠진다.이거...
  const onClickCountUp = () => {
    setCount(1);
  };
  const onClickMove = () => {
    void router.push("/");
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
