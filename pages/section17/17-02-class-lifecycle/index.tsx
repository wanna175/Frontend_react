import { Component, ErrorInfo } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = { count: 0 };
  onClickCountUp = () => {
    this.setState({
      count: 1,
    });
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("변경되고 나서 실행");
  }
  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    //채팅방 나가기 API
  }

  onClickMove = () => {
    Router.push("/");
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}
