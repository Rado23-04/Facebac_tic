import React from 'react' ;
import { useState ,useEffect} from "react";
import axios from 'axios';
import './post.css'

export default function Post() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postReactions, setPostReactions] = useState({});
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

  const handleLikeClick = (postId , userId) => {
    axios.post(`http://127.0.0.1:8080/posts/${postId}/reactions`, {
      type: "LIKE",
      postId: postId,
      userId: userId, // Utilisez l'ID de l'utilisateur actuel
    })
    .then(response => {
      // Mettez à jour l'état des réactions pour ce poste
      console.log(response.data);
      setPostReactions(prevReactions => ({
        ...prevReactions,
        [postId]: response.data.likes, 
      }));
    })
    .catch(error => {
      console.error("Une erreur s'est produite lors de la réaction :", error);
    });
  };

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
        <button onClick={() => handleLikeClick(post.id , "a35caa02-eea3-4321-bb3d-c367497ad1c2")}>Like</button>
          <p>Likes: {postReactions[post.id] || 0}</p>
      </div>
    ))}
  </div>
  );
}
