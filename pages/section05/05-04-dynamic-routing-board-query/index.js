import { useRouter } from "next/router";
export default function StaticRoutingBoardPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/1");
  };
  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/2");
  };
  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/3");
  };

  return (
    <div>
      <button onClick={onClickMove1}>1번게시글</button>
      <button onClick={onClickMove2}>2번ㄱㅔ시글</button>
      <button onClick={onClickMove3}>3번 게시글</button>
    </div>
  );
}
