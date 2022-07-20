import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData";
import { useState } from "react";


export default function Post({ post }) {
  const [like, setLike] =useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = ()=> {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter(u => u.id === post?.userId)[0].profilePicture} alt="person" />
            <span className="postUsername">{Users.filter(u=>u.id===post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>
          <img className="postImg" src={post.photo} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like icon" onClick={likeHandler} />
            <img className="likeIcon" src="assets/heart.png" alt="like icon" onClick={likeHandler} />
            <span className="potLikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
