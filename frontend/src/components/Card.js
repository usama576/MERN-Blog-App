import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const id = props.id;
  const clickHandler = () => {
    navigate(`/post/${id}`);
  };
  const deleteHandler = async () => {
    const { data } = await axios.delete(
      `http://127.0.0.1:5000/blog/delete-blog/${id}`
    );
    if (data.success) {
      alert("Blog Deleted");
      navigate(`/admin`);
    }
  };
  const editHandler = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="card m-3">
      <img src={props.src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6>Category: {props.cat}</h6>
        {!props.isUser && <h6>Author: {props.user}</h6>}
        {props.isUser && (
          <>
            <button className="btn btn-dark" onClick={editHandler}>
              <i class="bi bi-pencil-fill"></i>
            </button>{" "}
            <button className="btn btn-dark me-1" onClick={deleteHandler}>
              <i class="bi bi-trash-fill"></i>
            </button>
          </>
        )}
        {/* <a href="#" className="btn btn-dark">Read Full Article</a> */}
        <button onClick={clickHandler} className="btn btn-dark">
          Read Full Article
        </button>
      </div>
    </div>
  );
}
