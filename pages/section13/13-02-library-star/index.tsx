import React, { useState } from "react";
import { Rate } from "antd";

export default function App() {
  const [value, setValue] = useState(3);

  //===1단계 방식===
  // const onChangeStar = (value : number):void=>{
  //     setValue(value);
  //  };

  //===2단계 방식===
  // const onChangeStar = (value : number):void=>setValue(value);
  return (
    //<Rate onChange={onChangeStar} value={value} />      //1단계 방식
    //<Rate onChange={onChangeStar} value={value} />      //2단계 방식
    //<Rate onChange={(value)=>(setValue(value))} value={value} />     //3단계 방식
    <Rate onChange={setValue} value={value} /> //들어온 인자가 그 다음함수에 그대로 들어갈때 이렇게 생략해서 표기가 가능하다.
  );
}
