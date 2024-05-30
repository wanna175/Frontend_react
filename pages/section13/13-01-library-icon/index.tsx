import { StepForwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import React from "react";

const MyIcon = styled(StepForwardOutlined)`
  color: red;
  font-size: 150px;
`;

export default function LibraryIconPage() {
  const onClickDelete = (event: React.MouseEvent<HTMLSpanElement>) => {
    alert(event.currentTarget.id);
  }; //UI프레임워크로 가져오면 태그가 다른방식으로 감싸져서 이런식으로 이벤트 버블링 이용해야한다.
  return (
    <span id="삭제할 아이디" onClick={onClickDelete}>
      <MyIcon />
    </span>
  );
}
