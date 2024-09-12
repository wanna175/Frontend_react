import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
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
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };
  const InputWriter = (event: any) => {
    setWriter(event.target.value);
  };
  const InputTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const InputContents = (event: any) => {
    setContents(event.target.value);
  };
  return (
    <div>
      작성자:
      <input type="text" onChange={InputWriter} />
      제목:
      <input type="text" onChange={InputTitle} />
      내용:
      <input type="text" onChange={InputContents} />
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </div>
  );
}
