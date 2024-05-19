import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <dev>
      작성자:
      <RedInput type="text" onChange={props.writer} />
      제목:
      <RedInput type="text" onChange={props.title} />
      내용:
      <RedInput type="text" onChange={props.contents} />
      <BlueButton onClick={props.submit}>GraphQL-API 요청하기</BlueButton>
    </dev>
  );
}
