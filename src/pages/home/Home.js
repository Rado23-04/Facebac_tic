import React from 'react' ;
import Topbar from '../../components/topbar/Topbar';
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from "../../components/feed/Feed.js";
export default function Home(){
    return (
       <>
        <Topbar/>
        <div className="homeContainer"></div>
        <Sidebar/>
        <Feed/>
       </>
    )
}
