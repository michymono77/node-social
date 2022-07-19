import "./post.css"
import { MoreVert } from "@mui/icons-material"


export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="person" />
            <span className="postUsername">Jane Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Hey! It's my first post:)
          </span>
          <img className="postImg" src="./assets/post/1.jpeg" alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like icon" />
            <img className="likeIcon" src="assets/heart.png" alt="like icon" />
            <span className="potLikeCounter">32 people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
