export default function TypescriptPage() {
  //타입추론 : 초기값으로 변수타입을 넣어준다.
  let aaa = "안녕하세요";

  //타입명시
  let bbb: string = "반갑습닏니다..";

  //타입명시가 필요한 경우
  let ccc: number | string = 1000;
  ccc = "1000원";

  //숫자타입
  let ddd: number = 10;

  //불린타입
  let eee: boolean = true;
  eee = false;

  //배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  let ggg: (number | string)[] = ["철수", 0, 2, 3];

  //객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  //함수타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  //any타입
  let qqq: any = "함수";
  qqq = 123;
  qqq = true;
  return <></>;
}
