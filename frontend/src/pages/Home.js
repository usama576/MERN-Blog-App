import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header1 from "../components/header1";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home() {
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
    <div>
      <Header1 />
      <div className="row m-3">
        <div className="col-12">
          <h3>News</h3>
          <hr />
        </div>
        {blogs
          .filter((val) => val.cat === "News")
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
        <div className="col-12 ">
          <Link to="/news" className="btn btn-dark">
            See all news blogs
          </Link>
          <hr />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-12">
          <h3>Sports</h3>
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
        <div className="col-12 ">
          <Link to="/sports" className="btn btn-dark">
            See all Sports blogs
          </Link>
          <hr />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-12">
          <h3>Technology</h3>
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
        <div className="col-12 ">
          <Link to="/technology" className="btn btn-dark">
            See all Technology blogs
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
}
