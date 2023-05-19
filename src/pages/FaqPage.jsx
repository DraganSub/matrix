import { Link } from "react-router-dom";
import "../styles/App.css";

export function FaqPage() {
    return (
      <div className="faq">
        <h1>FAQ</h1>
        <div >
        <h2>
        1. What is the chat app?
        </h2>
        <p> The chat app is a messaging platform that allows users to communicate with friends,
        family, and colleagues in real-time.</p>
        </div>
        <div>
          <h2>2. How do I use the chat app?</h2>
          <p>To use the chat app simply select an avatar image and a username and click on the sign in button.</p>
        </div>
        <div>
          <h2>3. Is the chat app free to use?</h2>
          <p>
          Yes, the chat app is free to use. You can always share it with family, freinds or co-workers. 
          </p>
        </div>
        <Link to="/">Back to Sign in!</Link>
      </div>
    );
}
