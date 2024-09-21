import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/components/commons/types/generated/types";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //mutation후 리패치와 다르게 이런식으로 사용할 수 있구만.
  const onClickPage = (event: React.MouseEvent<HTMLSpanElement>) => {
    //검색에서 refetch를 할 때, search검색어가 refetch에 이미 저장되어 있어서 추가로 search포함
    //안해도 됨
    refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };
  const onClickSearch = () => {
    refetch({
      search: search,
      page: 1,
    });
  };
  return (
    <div>
      검색어 입력:
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
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
    </div>
  );
}
