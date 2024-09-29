import logoImg from "../assets/img/logo_wt.png";
import IconList from "./IconList";

export default function RightSection() {
  return (
    <section className="right">
      <h2 className="logo">
        <img src={logoImg} alt="재난 보관함" />
      </h2>
      <div className="content">
        <h4>대피요령</h4>
        <IconList />
        <h4>최근재난문자</h4>
        <div>{/* <SafeText pageNo='1' numOfRows='3'/> */}</div>
      </div>
    </section>
  );
}
