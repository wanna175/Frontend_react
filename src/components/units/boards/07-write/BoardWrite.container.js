import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);
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
  const checkInput = () => {
    if (writer && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const InputWriter = (event) => {
    setWriter(event.target.value);
    if (title && contents && event.target.value) setIsActive(true);
    else setIsActive(false);
  };
  const InputTitle = (event) => {
    setTitle(event.target.value);
    if (writer && contents && event.target.value) setIsActive(true);
    else setIsActive(false);
  };
  const InputContents = (event) => {
    setContents(event.target.value);
    if (title && writer && event.target.value) setIsActive(true);
    else setIsActive(false);
  };
  //여기서 setState는 함수가 끝나야지만 그 스테이트의 값을 바꾸고 리렌더링하기
  //때문에 밑에 state값으로 true,false를 판단하려고 하면 이상하게 동작할 수 있음을 명심하자.
  return (
    <BoardWriteUI
      submit={onClickSubmit}
      writer={InputWriter}
      title={InputTitle}
      contents={InputContents}
      isActive={isActive}
    />
  );
}
