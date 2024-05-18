import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.aaa),
    },
  }); //이거 만나는 순간 백엔드에 요청바로 날라감
  console.log(data);
  return (
    <dev>
      <dev>{router.query.aaa}번게시글 이동완료.</dev>
      <dev>작성자 : {data?.fetchBoard?.writer}</dev>
      <dev>제목 : {data?.fetchBoard?.title}</dev>
      <dev>내용 : {data?.fetchBoard?.contents}</dev>
    </dev>
  );
}
