import "./sidebar.css";
import React from "react";



export default function Sidebar() {
  return (
    <div className="left-panel">
                 <ul>
                <li>
                    <span className="profile"></span>
                    <p>Aashish Panthi</p>
                </li>
                <li>
                    <i className="fa fa-user-friends"></i>
                    <p>Friends</p>
                </li>
                <li>
                    <i className="fa fa-play-circle"></i>
                    <p>Videos</p>
                </li>
                <li>
                    <i className="fa fa-flag"></i>
                    <p>Pages</p>
                </li>
                <li>
                    <i className="fa fa-users"></i>
                    <p>Groups</p>
                </li>
                <li>
                    <i className="fa fa-bookmark"></i>
                    <p>Bookmark</p>
                </li>
                <li>
                    <i className="fab fa-facebook-messenger"></i>
                    <p>Inbox</p>
                </li>
                <li>
                    <i className="fas fa-calendar-week"></i>
                    <p>Events</p>
                </li>
                <li>
                    <i className="fa fa-bullhorn"></i>
                    <p>Ads</p>
                </li>
                <li>
                    <i className="fas fa-hands-helping"></i>
                    <p>Offers</p>
                </li>
                <li>
                    <i className="fas fa-briefcase"></i>
                    <p>Jobs</p>
                </li>
                <li>
                    <i className="fa fa-star"></i>
                    <p>Favourites</p>
                </li>
            </ul>
    </div>
  );
}
