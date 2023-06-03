import Image from "../assets/logo3.jpg";
import { Link } from "react-router-dom"

export default function Header1(){
    return (
        <section className="bg-dark">
      <div className="container">
        <div className="align-items-center g-0 row">
          <div className="col-xl-5 col-lg-6 col-md-12">
            <div className="py-5 py-lg-0">
              <h1 className="text-white display-6 fw-bold">
                Welcome to Blogs Mania
              </h1>
              <p className="text-white-50 mb-4 lead">
              Blogs Mania is a Freelancing, Technology and Motivational blog
              covering important tech news and posting daily inspirational/motivational posts.
              </p>
              
              <Link className="btn btn-light" to="/about">Learn More</Link>
            </div>
          </div>
          <div className="text-lg-end text-center col-xl-7 col-lg-6 col-md-12 mb-2">
            <img
              src={Image}
              alt
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </section>
    );
}