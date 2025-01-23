
import AllProducts from "./page1";
import TopHead from "./top";
import SideBar from "./sideBar";
import BottomBar from "./bottom";

export default function InsidePage2() {
  return (
    <div className="h-auto ">
      <TopHead />
      <div className="flex ">
        <SideBar />
        <AllProducts />
      </div>
      <div className="text-center pb-11">
        <BottomBar />
      </div>{" "}
    </div>
  );
}
