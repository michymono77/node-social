import Topbar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
// TODO
// 1. create Topbar (nav)
// 2. divide the screen into three: sidebar(3), feed(5.5), rightbar(3.5)
// and wrap them in a container (use display:flex, and divided the section by 12)

export default function Home() {
  return (
  <>
  <Topbar />
  <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
  </div>
  </>
  )
}
