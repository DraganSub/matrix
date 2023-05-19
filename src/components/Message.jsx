import "../styles/MessageStyle.css";
import { avatarImages } from "../library/avatar";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function Message(props) {
    const context = useContext(AppContext)
    return (
        <div className={`message ${props.author === context.activeUser ? 'current-user' : ''}`}>
            <img
                className="message-img"
                src={avatarImages[props.avatarIndex]} alt={props.author} width={100} height={100} />
            <div className={`message-style ${props.author === context.activeUser ? 'current-user-msg-style' : ''}`}>
                <div className="message-author">{props.author}</div>
                <div className={`message-text ${props.author === context.activeUser ? 'current-user-message-pop' : ''}`}>{props.text}</div>
            </div>
        </div>
    );
}