import React from 'react' ;
import { useState ,useEffect} from "react";
import axios from 'axios';
import './post.css'

export default function Post() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get('http://127.0.0.1:8080/posts')
      .then(response => {
        setPostData(response.data);
        console.log(response.data); 
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite :', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }
  console.log(postData.title);
  return (
    <div className="post">
    {postData.map((post, index) => (
      <div key={index}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
  );
}