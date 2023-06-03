import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const [resultPost, setPost] = useState({});
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/blog/get-blog/${id}`)
      .then((resolve) => {
        console.log(resolve.data.blog);
        setPost(resolve.data.blog);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div
      className="bg-dark text-light container mt-3 "
      style={{ marginBottom: "500px" }}
    >
      <div className="container p-4">
        <img src={resultPost.image} className="img-fluid" alt="" />
        <h2>Blog Title: {resultPost.title}</h2>
        <h5>Category : {resultPost.cat} </h5>
        {/* <h5>Author : {resultPost.user.username}</h5> */}

        <hr />
        <p>{resultPost.description}</p>
      </div>
    </div>
  );
}
