import BoardWrite from "../../../src/components/units/boards/write/BoardWrite.container";
//export default는 이름 바꿔서 가져올 수도 있다.
//{}에 넣어줘야 하는것은 export로 된 것들을 골라서 가져올 때 사용하는 것이다.
//import * as QQQ from ...이런식으로 모든 export를 가져오는 것도 가능하다.
export default function GraphQLMutationArgsPage() {
  return <BoardWrite />;
}
