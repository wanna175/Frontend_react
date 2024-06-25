import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADER = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
  //...
  //...
];
interface ILayout {
  children: JSX.Element;
}

export default function Layout(props: ILayout) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath); //현재 페이지의 주소값 가져다가 비교
  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter />
    </div>
  );
}
