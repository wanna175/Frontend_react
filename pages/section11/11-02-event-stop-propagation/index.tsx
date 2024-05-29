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
    event.stopPropagation(); //더이상 부모 태그들이 클릭되지 않는다.!!
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
//이벤트 버블링을 막기위한 방법=>event.stopPropagation을 사용한다.
//파일이 분리되어도 이벤트 버블링이 발생할 수 있으니 주의하자.
