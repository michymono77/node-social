import "./message.css";
import {format} from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own": "message"}>
      <div className="messageTop">
        <img
          src="https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
          alt="phot" className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
