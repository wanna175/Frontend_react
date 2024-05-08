import { useState } from "react";

export default function CounterStatePage() {
  const [count, SetCount] = useState(0);

  function onClickCountUp() {
    SetCount(count + 1);
  }
  function onClickCountDown() {
    SetCount(count - 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
