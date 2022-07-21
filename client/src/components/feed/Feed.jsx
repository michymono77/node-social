import { useEffect, useState } from "react";
import Post from "../posts/Post"
import Share from "../share/Share"
import "./feed.css"
// import { Posts } from "../../dummyData";
import axios from "axios"


export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/62d883779058abfe37c8bf45")
      console.log(res)
      setPosts(res.data)
    };
    fetchPosts();
  }, [username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
    </div>
    </div>
  )
}
