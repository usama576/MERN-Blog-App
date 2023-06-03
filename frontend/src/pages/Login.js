import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/Store";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
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
      const { data } = await axios.post("http://127.0.0.1:5000/user/login", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data.user._id);
        dispatch(authActions.login());
        alert("User Logged In Successfully");
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container   ">
      <div className="row  d-flex justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 m-5 border">
          <div className="my-4">
            <h3>Sign In</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={inputs.email}
                onChange={changeHandler}
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
                placeholder="Enter your password"
                value={inputs.password}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="mb-4">
              <button className="btn btn-dark" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
