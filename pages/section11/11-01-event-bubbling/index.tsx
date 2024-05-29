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
  const onClickContents = (
    writer: string,
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    alert(`${writer}님이 작성한 게시물입니다.`);
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div
          onClick={(e) => {
            onClickContents(el.writer, e);
          }}
        >
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
    </div>
  );
}
//이벤트 버블링이란? 자식의 onclick을 눌렀는데 부모의 onclick까지 실행이 된다.!!
//반대는 이벤트 캡쳐링=>따로 옵션을 줘야한다
//즉 onclick을 했을때 부모에만 id값이 있고 그값을 출력한다면 자식을 눌렀을때도
//부모의 onclick이 실행되지만 id를 가져오지 못하는 상황이 발생한다는 것이다.
//물론 target 대신에 currentTarget을 이용하면 해결가능
