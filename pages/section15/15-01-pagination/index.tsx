import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/components/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //mutation후 리패치와 다르게 이런식으로 사용할 수 있구만.
  const onClickPage = (event: React.MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPage2 = async () => {
    const result = await refetch({ page: 2 });
    console.log(result); //뭔가 기다렸다가 실행해야 할 때는 await를 쓴다.
  };
  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title} </span>
          <span style={{ margin: "10px" }}>{el.writer} </span>
        </div>
      ))}
      {new Array(10).fill(1).map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))}
      {/* {[1, 1, 1, 1, 1].map((_,index) => (//_는 안쓰는 변수를 나타낼때 쓰는 관례같은 거
        <span key={index+1} id={String(index+1)} onClick={onClickPage}>
          {index+1}
        </span>
      ))}
      {[1, 2, 3, 4, 5].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}
    </div>
  );
}
