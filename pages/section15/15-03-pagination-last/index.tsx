import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
export default function StaticRoutingMovedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //mutation후 리패치와 다르게 이런식으로 사용할 수 있구만.

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount ?? 10 / 10);

  const onClickPage = (event: React.MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPage2 = async () => {
    const result = await refetch({ page: 2 });
    console.log(result); //뭔가 기다렸다가 실행해야 할 때는 await를 쓴다.
  };
  console.log(data?.fetchBoards);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
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
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
