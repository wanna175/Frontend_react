interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1.partial 타입
type aaa = Partial<IProfile>;
//마우스 올려보면 변수에 다 ? 가 붙은 것을 볼수 있을 것이다.

//2.required 타입
type bbb = Required<IProfile>;
//모든것이 넣어져야하는 타입

//3.pick 타입
type ccc = Pick<IProfile, "name" | "age">;
//객체안의 키중 골라서 넣을수 있는 것

//4.omit 타입
type ddd = Omit<IProfile, "school">;
//빼기

//5.record 타입
type eee = "철수" | "영희" | "훈이"; //union 타입
//eee를 쓰면 저기 명시된 3개 중에 하나만 넣을 수 있다.

type fff = Record<eee, IProfile>;

//6.객체의 키로 유니온 타입 만들기
type ggg = keyof IProfile;
//"name"|"age"|"school"|"hobby"

//7.type과 interface의 차이=>선언병합
interface IProfile {
  candy: number; //선언 병합으로 추가됨
}
