import React from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="container   ">
      <div className="row  d-flex justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 m-5 border">
          <div className="my-4">
            <h3>Admin Page</h3>
          </div>

          <div className="mb-4">
            <button
              className="btn btn-dark"
              onClick={() => {
                navigate("/create");
              }}
            >
              Create New Blog
            </button>
          </div>
          <div className="mb-4">
            <button
              className="btn btn-dark"
              onClick={() => {
                navigate("/myblog");
              }}
            >
              Update Blog
            </button>
          </div>
          <div className="mb-4">
            <button
              className="btn btn-dark"
              onClick={() => {
                navigate("/myblog");
              }}
            >
              Delete Blog
            </button>
          </div>
          <div className="mb-4">
            <button
              className="btn btn-dark"
              onClick={() => {
                navigate("/myblog");
              }}
            >
              Show all my Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
