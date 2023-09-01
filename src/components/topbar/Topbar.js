import React from 'react' ;
import "./topbar.css";
export default function Topbar(){
    return (
        <div className="topbarContainer">
        <div className="nav-left">
            <img src="/assets/" alt="Logo"/>
            <input type="text" placeholder="Search FaceBak.."/>
        </div>

        <div className="nav-middle">
            <a href="/home" className="active">
                <i className="fa fa-home"></i>
            </a>

            <a href="/user">
                <i className="fa fa-user-friends"></i>
            </a>

            <a href="/g">
                <i className="fa fa-play-circle"></i>
            </a>

            <a href="/k">
                <i className="fa fa-users"></i>
            </a>
        </div>

        <div className="nav-right">
            <span className="profile"></span>

            <a href="/">
                <i className="fa fa-bell"></i>
            </a>

            <a href="/h">
                <i className="fas fa-ellipsis-h"></i>
            </a>
        </div>
      </div>
    )
}
