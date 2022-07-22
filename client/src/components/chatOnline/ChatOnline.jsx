import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
            alt="" />
          <div className="chatOnlineBadge">
          </div>
        </div>
        <span className="chatOnlineName">
          John Doe
        </span>
      </div>
    </div>
  )
}
