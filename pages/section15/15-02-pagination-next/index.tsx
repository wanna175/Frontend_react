import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/components/commons/types/generated/types";
import { useState } from "react";

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
  const [startPage, setStartPage] = useState(1);
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

  const onClickPrevPage = () => {
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title} </span>
          <span style={{ margin: "10px" }}>{el.writer} </span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span id={String(index + startPage)} onClick={onClickPage}>
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
