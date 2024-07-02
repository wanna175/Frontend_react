import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterStatePage() {
  const [count, SetCount] = useState(0);

  const onClickCount = () => {
    SetCount((prev) => prev + 1);
  };
  return (
    <div>
      <Child1 count={count} setCount={SetCount} />
      <div>=============================</div>
      <Child2 count={count} onClickCount={onClickCount} />
    </div>
  );
}
