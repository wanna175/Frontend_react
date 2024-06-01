import { useState } from "react";

export default function CounterStatePage() {
  const [count, SetCount] = useState<number>(0);

  function onClickCountUp() {
    // SetCount(count + 1);
    // SetCount(count + 1);
    // SetCount(count + 1);
    // SetCount(count + 1);
    // SetCount(count + 1);
    //여기서는 실제 count값을 가지고 1증가 시키므로 결국 1밖에는 증가하지 않게 되겠지.

    SetCount((prev) => prev + 1);
    SetCount((prev) => prev + 1);
    SetCount((prev) => prev + 1);
    SetCount((prev) => prev + 1);
    SetCount((prev) => prev + 1);
    //prev라는 것은 임시 저장공간에서 값을 가져오기 때문에 고스란히 저장이 된다.
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
