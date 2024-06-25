import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage() {
  return (
    <Example school="다람쥐초등학교">
      {/*여기 부분은 props.school로 접근 */}
      <div>
        <input type="text" />
        <div>저는 철수입니다.</div>
        <button>클릭해주세여</button>
      </div>
      {/*여기 부분은 props.children으로 접근 */}
    </Example>
  );
}
