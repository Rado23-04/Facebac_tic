import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";

export default function Post() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postReactions, setPostReactions] = useState({});
  const [likeCount, setLikeCount] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/posts")
      .then((response) => {
        setPostData(response.data);
        const initialLikeCount = {};
        response.data.forEach((post) => {
          initialLikeCount[post.id] = post.likes || 0;
        });
        setLikeCount(initialLikeCount);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
        setIsLoading(false);
      });
  }, []);

  const handleLikeDislikeClick = (postId, userId) => {
    if (postReactions[postId] === "LIKE") {
      axios
        .post(`http://127.0.0.1:8080/posts/${postId}/reactions`, {
          type: "DISLIKE",
          postId: postId,
          userId: userId,
        })
        .then((response) => {
          alert("DisLike succesfully 👍")
          console.log(response.data);
          setPostReactions((prevReactions) => ({
            ...prevReactions,
            [postId]: "DISLIKE",
          }));
          setLikeCount((prevLikeCount) => ({
            ...prevLikeCount,
            [postId]: prevLikeCount[postId] - 1,
          }));
        })
        .catch((error) => {
          console.error("Une erreur s'est produite lors de la réaction :", error);
        });
    } else {
      axios
        .post(`http://127.0.0.1:8080/posts/${postId}/reactions`, {
          type: "LIKE",
          postId: postId,
          userId: userId,
        })
        .then((response) => {
          alert("Like succesfully 👍")
          console.log(response.data);
          setPostReactions((prevReactions) => ({
            ...prevReactions,
            [postId]: "LIKE",
          }));
          setLikeCount((prevLikeCount) => ({
            ...prevLikeCount,
            [postId]: prevLikeCount[postId] + 1,
          }));
        })
        .catch((error) => {
          console.error("Une erreur s'est produite lors de la réaction :", error);
        });
    }
  };

  const loadComments = (postId) => {
    axios
      .get(`http://127.0.0.1:8080/posts/${postId}/comments`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors du chargement des commentaires :", error);
      });
  };

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  return (
      <div className="middle-panel">
      {postData.map((post, index) => (
        <div key={index} className="post">
          <div className="post-top">
          <div className="post-info">
              <p className="name">{post.title}</p>
              <span className="time">{post.createdAt}</span>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="post-content">
            {post.content} <br />
          </div>

          <div className="post-bottom">
          <div className="action">
              <i className="far fa-thumbs-up"></i>
              <span>
                <button
                  className="like-button"
                  onClick={() =>
                    handleLikeDislikeClick(
                      post.id,
                      "a35caa02-eea3-4321-bb3d-c367497ad1c2"
                    )
                  }
                >
                  {postReactions[post.id] === "LIKE" ? "Dislike" : "Like"} ({likeCount[post.id]})
                </button>
              </span>
            </div>
            <div className="action">
              <button
                className="like-button"
                onClick={() => {
                  loadComments(post.id);
                  setSelectedPost(post.id);
                }}
              >
                Comment
              </button>
            </div>
          </div>

          {selectedPost === post.id && (
            <div className="comments">
              {comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p className="comment-author">{comment.author}</p>
                  <p className="comment-text">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
