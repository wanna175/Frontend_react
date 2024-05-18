import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD); //이거 만나는 순간 백엔드에 요청바로 날라감
  console.log(data);
  return (
    <dev>
      <dev>1번게시글 이동완료.</dev>
      <dev>작성자 : {data && data.fetchBoard.writer}</dev>
      <dev>제목 : {data && data.fetchBoard.title}</dev>
      <dev>내용 : {data?.fetchBoard.contents}</dev>
    </dev>
  ); //위처럼 data && 해줘야 하는 이유는 useQuery로 요청을 보내놓고 데이터 필요없는 것부터 그리기 시작한다.
  //따라서 data는 undefine상태로 있게 되므로 .fetchBoard에 접근할 수 없어서 에러가 나는 것이다.
} //그리고 나서 data가 도착하면 그때 한번더 그려주는 비동기 방식으로 동작을 한다.
