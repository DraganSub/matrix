import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function MainLaoyut({ children }) {
  const context = useContext(AppContext)

  function handleSignOut() {
    context.setUsername('');
    context.setActiveUser(null);
  }

  return (
    <>
      <main className="main">
        <h1 className="title-main matrix-txt-layer">The Matrix</h1>
        <button className="sign-out-button" type="button" onClick={handleSignOut}>Sign out</button>
        <div className="container">
          {children}
        </div>
      </main>
      <Link className="faq-link" to="/faq">
        Read The FAQ
      </Link>
    </>
  )
}