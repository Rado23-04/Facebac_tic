import React from 'react' ;
import Topbar from '../../components/topbar/Topbar';
import "./home.css"

import Feed from "../../components/feed/Feed.js";


export default function Home(){
    return (
       <>
        <Topbar/>
        <div className="homeContainer"></div>
        <Feed/>
        
       </>
    )
}
