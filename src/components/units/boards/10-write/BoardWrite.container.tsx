import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
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
    router.push(
      `/section10/10-02-typescripts-boards/${result.data.createBoard.number}`
    );
  };
  const onClickUpdate = async () => {
    const myVariables: IMyvariables = { number: Number(router.query.number) };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescripts-boards/${result.data.updateBoard.number}`
    );
  };
  const InputWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const InputTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const InputContents = (event: ChangeEvent<HTMLInputElement>) => {
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