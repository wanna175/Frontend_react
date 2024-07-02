interface IChild2 {
  count: number;
  onClickCount: () => void;
}

export default function Child2(props: IChild2) {
  return (
    <div>
      <div>자식2의 카운트 : {props.count}</div>
      <button onClick={props.onClickCount}>카운트 올리기</button>
    </div>
  );
}
