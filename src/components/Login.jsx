import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import Image1 from "../Assets/images/image1.png";
import Image2 from "../Assets/images/image2.png";
import Image3 from "../Assets/images/image3.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import "../styles/login.css";

const Login = () => {
  const [activeInputs, setActiveInputs] = useState([1]);
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [signUpMode, setSignUpMode] = useState(false);

  const handleSubmit = () => {
    console.log("");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const toggleMode = () => {
    setSignUpMode(!signUpMode);
  };

  const handleSliderClick = (index) => {
    const images = document.querySelectorAll(".image");
    const textSlider = document.querySelector(".text-group");
    const bullets = document.querySelectorAll(".bullets span");

    images.forEach((image) => image.classList.remove("show"));
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
    bullets.forEach((bullet) => bullet.classList.remove("active"));

    const currentImage = document.querySelector(`.img-${index}`);
    currentImage.classList.add("show");
    bullets[index - 1].classList.add("active");
  };

  return (
    <main className={signUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* Sign In Section */}
            <form
              action="index.html"
              autocomplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <img src={logo} alt="ShopLeft" />
                <h4 className="font-bold text-center pt-1">ShopLeft</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet? </h6>
                <Link href="#" className={`toggle`} onClick={toggleMode}>
                  Sign up
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    className={`input-field`}
                    autocomplete="off"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type={visible ? "text" : "password"}
                    minlength="4"
                    className={`input-field`}
                    autocomplete="off"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-4 cursor-pointer text-slate-500"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-4 cursor-pointer text-slate-500"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                <div className="checkbox-wrapper flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="checkbox"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>

                <button className="sign-btn">Sign In</button>

                <p className="text mb-2">
                  Forgotten your password or you login datails?
                </p>
                <Link href="#" className="links font-bold text-sm opacity-80">
                  Get help
                </Link>
              </div>
            </form>
            {/* Sign Up Section */}
            <form
              action="index.html"
              autocomplete="off"
              className="sign-up-form"
            >
              <div className="logo">
                <img src={logo} alt="ShopLeft" />
                <h4 className="font-bold text-center pt-1">ShopLeft</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <Link href="#" className={`toggle`} onClick={toggleMode}>
                  Sign in
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    className={`input-field`}
                    autocomplete="off"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className={`input-field`}
                    autocomplete="off"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-wrap relative">
                  <input
                    type={visible ? "text" : "password"}
                    minlength="4"
                    className={`input-field`}
                    autocomplete="off"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-4 cursor-pointer text-slate-500"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-4 cursor-pointer text-slate-500"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                {/* avatar */}
                <div>
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium  text-gray-700"
                  ></label>
                  <div className="mb-8 flex items-center">
                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                      {avatar ? (
                        <img
                          src={URL.createObjectURL(avatar)}
                          alt="avatar"
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <RxAvatar className="h-8 w-8" />
                      )}
                    </span>
                    <label
                      htmlFor="file-input"
                      className="ml-5 flex items-center justify-center text-gray-700 border  border-gray-300 rounded-lg px-3 py-1"
                    >
                      <span>Upload a File</span>
                      <input
                        type="file"
                        name="avatar"
                        id="file-input"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileInputChange}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>

                <button className="sign-btn">Sign Up</button>
                <p className="text">
                  By signing up, I agree to the
                  <Link href="#">Terms of Services</Link> and
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={Image1}
                className={`image img-1 ${
                  activeInputs.includes(1) ? "show" : ""
                }`}
                alt=""
              />
              <img
                src={Image2}
                className={`image img-2 ${
                  activeInputs.includes(2) ? "show" : ""
                }`}
                alt=""
              />
              <img
                src={Image3}
                className={`image img-3${
                  activeInputs.includes(3) ? "show" : ""
                }`}
                alt=""
              />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your className</h2>
                </div>
              </div>

              <div className="bullets">
                <span
                  className={`active ${
                    activeInputs.includes(1) ? "active" : ""
                  }`}
                  data-value="1"
                  onClick={() => handleSliderClick(1)}
                ></span>
                <span
                  className={`active ${
                    activeInputs.includes(2) ? "active" : ""
                  }`}
                  data-value="2"
                  onClick={() => handleSliderClick(2)}
                ></span>
                <span
                  className={`active ${
                    activeInputs.includes(3) ? "active" : ""
                  }`}
                  data-value="3"
                  onClick={() => handleSliderClick(3)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
