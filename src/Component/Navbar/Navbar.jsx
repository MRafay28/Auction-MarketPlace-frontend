import React from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASEURL } from "../../../BASEURL";
import { DropdownButton } from "react-bootstrap";
import { MenuItem } from "@mui/material";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const navLogin = () => {
    // if (userInfo) {
    //   return;
    // }
    navigate("/logins");
  };
  const scrollToContact = (id) => {
    const contactSection = document.getElementById(id);

    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="navbar-sec">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                className="img-fluid nav-logo"
                src="..\asset\hero\logo.png"
                alt=""
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link pb-3" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link pb-3"
                    aria-current="page"
                    to="/create-product"
                  >
                    Add New Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link pb-3" aria-current="page" to="/message">
                    Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link pb-3"
                    aria-current="page"
                    to="/"
                    onClick={() => scrollToContact("contact-section")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link pb-3"
                    aria-current="page"
                    to="/"
                    onClick={() => scrollToContact("FAQ-section")}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>

              <div className="log-btn">
                <button className="login" onClick={navLogin}>
                  {userInfo ? <>{userInfo.username}</> : <> Login/Singup</>}
                </button>
                <Link to="profile">
                  <img
                    src={userInfo ? `${BASEURL}/${userInfo?.image}` : null}
                    class="rounded-circle"
                    height="42"
                    width="42"
                    alt="Avatar"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
