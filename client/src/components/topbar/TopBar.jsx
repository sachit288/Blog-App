import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://https://blog-app-otyn.onrender.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="https://blog-app-otyn.onrender.com/api/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="https://blog-app-otyn.onrender.com/api/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="https://blog-app-otyn.onrender.com/api/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="https://blog-app-otyn.onrender.com/api/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="https://blog-app-otyn.onrender.com/api/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="https://blog-app-otyn.onrender.com/api/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="https://blog-app-otyn.onrender.com/api/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
