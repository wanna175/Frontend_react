import { RedInput, BlueButton } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      작성자:
      <RedInput
        type="text"
        onChange={props.writer}
        defaultValue={props.data?.fetchBoards.writer}
      />
      제목:
      <RedInput
        type="text"
        onChange={props.title}
        defaultValue={props.data?.fetchBoards.title}
      />
      내용:
      <RedInput
        type="text"
        onChange={props.contents}
        defaultValue={props.data?.fetchBoards.contents}
      />
      <BlueButton onClick={props.isEdit ? props.update : props.submit}>
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  );
}
