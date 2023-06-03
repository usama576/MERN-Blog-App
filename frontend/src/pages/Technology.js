import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Technology() {
  const [blogs, setBlogs] = useState([]);

  //Getting Blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/blog");
      if (data && data.success) {
        setBlogs(data.blogs);
        console.log(data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="container">
      <div className="row m-3">
        <div className="col-12">
          <h3>Technology Blogs</h3>
          <hr />
        </div>
        {blogs
          .filter((val) => val.cat === "Technology")
          .map((val) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Card
                  title={val.title}
                  src={val.image}
                  description={val.description}
                  user={val.user.username}
                  cat= {val.cat}
                  id={val._id}
                  
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
