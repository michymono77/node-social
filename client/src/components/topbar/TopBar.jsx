import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import {Link} from "react-router-dom"
// TODO

// 1. Topbar is divided into three classes: left(3), center(5), right(4)
// 2. Three classes are wrapped by the container

export default function TopBar() {
  return (
    <div className="topbarContainer">
      {/* TODO: Logo */}
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none" }}>
          <span className="logo">Michisocial</span>
        </Link>
      </div>
      {/* TODO: Search */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      {/* TODO: Links, Icons, Profile image  */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="person" className="topbarImg" />
      </div>
    </div>
  )
}
