import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite() {
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
      submit={onClickSubmit}
      writer={InputWriter}
      title={InputTitle}
      contents={InputContents}
    />
  );
}
