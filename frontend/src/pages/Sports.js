import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Sports(){
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
          <h3>Sports Blogs</h3>
          <hr />
        </div>
        {blogs
          .filter((val) => val.cat === "Sports")
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