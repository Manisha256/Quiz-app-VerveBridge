import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { Link } from "react-router-dom";

function Login() {
  const { setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  let { name, password } = userData;

  function handleOnchange(e) {
    return setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      if (user.password === userData.password) {
        alert("login successfully");
        navigate("/user/quiz");
        setIsLogin(true);
      } else {
        alert("incorrect password");
      }
    } else {
      alert("user not found");
    }
  }
  return (
    <div>
      <div className="container  d-flex justify-content-around p-4 flex-wrap">
        <div>
          <form
            className="form-control p-5 h-100 w-100 m-2 shadow-lg"
            style={{ background: "#bee1e6", height: 350, width: 300 }}
            onSubmit={handleLogin}
          >
            <h1 className="text-center mb-4">Login</h1>
            <label htmlFor="name" className="form-label  ">
              Username
            </label>
            <input
              className="form-control shadow-lg "
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleOnchange}
            />
            <label htmlFor="password" className="form-label p-1">
              Password
            </label>
            <input
              className="form-control shadow-lg"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleOnchange}
            />
            <button
              style={{ background: "#a0c4ff" }}
              className="form-control my-3 text-white shadow-lg table-hover"
              type="submit"
            >
              Login
            </button>
            <p className="text-center">or</p>
            <button
              style={{ background: "white" }}
              className="form-control my-3 text-white"
              type="button"
            >
              <Link className="text-black text-decoration-none" to={"/"}>
                Sign up
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
