import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setInput((preval) => {
      return {
        ...preval,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/user/register", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        alert("User Regestered");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container   ">
      <div className="row align-items-center d-flex justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 m-5 border ">
          <div className="my-4">
            <h3>Sign Up</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                name="username"
                value={inputs.username}
                onChange={changeHandler}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                value={inputs.email}
                onChange={changeHandler}
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                value={inputs.password}
                onChange={changeHandler}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4">
              <button className="btn btn-dark" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
