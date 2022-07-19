import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

// in this component, you can input whatever you want to share in a feed

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg"src="/assets/person/1.jpeg" alt="" />
          <input placeholder="What's in your mind?"
          type="text" className="shareInput"/>
        </div>
        <hr className="shareHr" />
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia htmlColor="#EE5622" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOption">
            <Label htmlColor="#0a54b3" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="#1D1A05" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="#7FB069" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
        </div>
        <button className="shareButton">Share</button>
      </div>
      </div>
    </div>
  )
}
