import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  return (
    <dev>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number} </span>
          <span style={{ margin: "10px" }}>{el.title} </span>
          <span style={{ margin: "10px" }}>{el.writer} </span>
        </div>
      ))}
      {/* <dev>1번게시글 이동완료.</dev>
      <dev>작성자 : {data && data.fetchBoard.writer}</dev>
      <dev>제목 : {data && data.fetchBoard.title}</dev>
      <dev>내용 : {data?.fetchBoard.contents}</dev> */}
    </dev>
  );
}
