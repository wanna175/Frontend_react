import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 3) {
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
      <dev>3번게시글 이동완료.</dev>
      <dev>작성자 : {data && data.fetchBoard?.writer}</dev>
      <dev>제목 : {data && data.fetchBoard?.title}</dev>
      <dev>내용 : {data?.fetchBoard?.contents}</dev>
    </dev>
  );
} //삭제되었을 때를 대비하여 저기 ? 옵셔널 체이닝을 달아준다.
