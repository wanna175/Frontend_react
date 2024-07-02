import { Dispatch, SetStateAction } from "react";

interface IChild1 {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
export default function Child1(props: IChild1) {
  function onClickCountUp(): void {
    props.setCount((prev) => prev + 1);
  }
  return (
    <div>
      <div>자식1의 카운트 : {props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
