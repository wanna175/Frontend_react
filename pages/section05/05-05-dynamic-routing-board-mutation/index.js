import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphQLMutationArgsPage() {
  const router = useRouter();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      //서버상황에 따라서 실패할 가능성이 있으므로 try catch문에서 처리를 해줘야 한다.
      const result = await 나의함수({
        variables: {
          writer: "훈이",
          title: "안녕하세요",
          contents: "홀리씻",
        },
      });
      console.log(result);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>;
}
