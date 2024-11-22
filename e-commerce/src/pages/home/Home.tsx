import { Header, } from "../../components/Header/Navbar/Navbar";
import SortProductMenu from "../../components/Header/SortProductMenu/SortProductMenu";
import Section from "./section/Section";

function Home() {
  return (
    <div className=" w-full pt-4" >
    <Header name={"Walisson"} />
    <SortProductMenu />
      <Section />
    </div>
  );
}

export default Home;
