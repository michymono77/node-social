import "./post.css"
import { MoreVert } from "@mui/icons-material"
// import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext} from "../../pages/context/AuthContext";
// note that the prop { post } originally comes from dummyData;
// now we are using api

export default function Post({ post }) {
  const [like, setLike] =useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  // Define public holder
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const { user:currentUser } = useContext(AuthContext);

  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`)
      console.log(res)
      setUser(res.data)
    };
    fetchUser();
  }, [post.userId])

  const likeHandler = ()=> {
    try {
      axios.put("/posts/" + post._id+"/like", {userId: currentUser._id})
    } catch (err) {

    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
              className="postProfileImg"
              // src={PF + Users.filter(u => u.id === post?.userId)[0].profilePicture}
              src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}
              alt="person" />
            </Link>
            <span className="postUsername">
              {/* {Users.filter(u=>u.id===post?.userId)[0].username} */}
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} alt="like icon" onClick={likeHandler} />
            <img className="likeIcon" src={`${PF}heart.png`} alt="like icon" onClick={likeHandler} />
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
