import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);
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
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };
  const onClickUpdate = async () => {
    const myVariables = { number: Number(router.query.number) };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };
  const InputWriter = (event) => {
    setWriter(event.target.value);
  };
  const InputTitle = (event) => {
    setTitle(event.target.value);
  };
  const InputContents = (event) => {
    setContents(event.target.value);
  };
  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      update={onClickUpdate}
      submit={onClickSubmit}
      writer={InputWriter}
      title={InputTitle}
      contents={InputContents}
      data={props.data}
    />
  );
}
