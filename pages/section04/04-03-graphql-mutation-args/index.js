import { useMutation, gql } from "@apollo/client";
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
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: "훈이",
        title: "안녕하세요",
        contents: "홀리씻",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>;
}
