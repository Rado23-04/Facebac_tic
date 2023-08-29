import Post from "../post/Post";
import Share from "../share/Share";
import Sidebar from "../sidebar/Sidebar";
import "./feed.css";


export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share /> 
        <Post />
        <Sidebar/>
      </div>
    </div>
  );
}
