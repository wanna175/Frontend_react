//컴포넌트가 리렌더링 되도 다시 안만들어 지는 전역부분...
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  //1.가장 기본 예제
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ];

  //2.실무 벡엔드 데이터 예제
  const bbb = FRUITS.map((e) => (
    <div>
      {e.number} {e.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      <div>============</div>
      <div>{bbb}</div>
      <div>============</div>
      <div>
        {FRUITS.map((e) => (
          <div>
            {e.number} {e.title}
          </div>
        ))}
      </div>
    </div>
  );
}
