import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);

  const [friends, setFriends] = useState([])
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))


  // to determine whether you are following the profile or not

  useEffect (()=>{
    setFollowed(currentUser.followings.includes(user?.id))
  }, [currentUser, user])


  // get friends

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if(followed) {
        await axios.put("/users/"+user._id+"/unfollow", {userId:currentUser._id});
        dispatch({type:"UNFOLLOW", payload:user._id})
      } else {
        await axios.put("/users/" + user._id + "/follow", { userId: currentUser._id })
        dispatch({ type: "FOLLOW", payload: user._id })
      }
    } catch(err){
      console.log(err);
    }
    setFollowed(!followed)
  }

  // if you are on the home page

  const HomeRightbar = () =>{
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="gift" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src={`${PF}ad.png`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  // if you are on the profile page

  const ProfileRightbar = ()=>{
    return (
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
        </button>
      )}
        <h4 className="rightbarTitle">User Information</h4>

        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>

        <div className="rightbarFollowings">
          {friends.map(friend =>(
            <Link to={"/profile/" + friend.username} style={{ textDecoration: "none" }}>
            <div className="rightbarFollowing" key={friend._id}>
              <img
                src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
            </Link>
          ))}
        </div>
      </>
    )
  }


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}

      </div>
    </div>
  )
}
