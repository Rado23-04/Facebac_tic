import "./share.css";
import React from 'react' ;

export default function Share() {
    return (
      <div className="middle-panel">
                   <div className="post create">
                <div className="post-top">
                    <div className="dp">
                        <img src="./images/girl.jpg" alt=""/>
                    </div>
                    <input type="text" placeholder="What's on your mind, Aashish ?" />
                </div>
                
                <div className="post-bottom">
                    <div className="action">
                        <i className="fa fa-video"></i>
                        <span>Live video</span>
                    </div>
                    <div className="action">
                        <i className="fa fa-image"></i>
                        <span>Photo/Video</span>
                    </div>
                    <div className="action">
                        <i className="fa fa-smile"></i>
                        <span>Feeling/Activity</span>
                    </div>
                </div>
                
                   </div>
      </div>
    );
  }
  