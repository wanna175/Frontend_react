import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/components/commons/types/generated/types";
import { useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;
export default function SearchKeywordPage() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //mutation후 리패치와 다르게 이런식으로 사용할 수 있구만.
  const onClickPage = (event: React.MouseEvent<HTMLSpanElement>) => {
    //검색에서 refetch를 할 때, search검색어가 refetch에 이미 저장되어 있어서 추가로 search포함
    //안해도 됨
    refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
    console.log(keyword);
  }, 500);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };
  return (
    <div>
      검색어 입력:
      <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {el.title
            .replaceAll(keyword, `@#$${keyword}@#$`)
            .split("@#$")
            .map((el2) => (
              <span
                key={uuidv4()}
                style={{ color: el2 === keyword ? "red" : "black" }}
              >
                {el2}
              </span>
            ))}{" "}
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
