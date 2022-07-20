import "./profile.css"
import Topbar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg"src={`${PF}post/3.jpeg`} alt="cover" />
              <img className="profileUserImg" src={`${PF}post/7.jpeg`} alt="avatar" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">James Doe</h4>
              <span className="profileInfoDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus doloribus dolores eum cum ad nesciunt esse ab quasi, quisquam praesentium quos quibusdam mollitia quo nemo cumque velit rerum voluptatem!
              </span>
              <hr className="profileHr" />
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
