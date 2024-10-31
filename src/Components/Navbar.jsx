import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [Checklogin, setChecklogin] = useState("NO");
  const [CurrentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Local storage se user data fetch karna
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setChecklogin("yes");
      setCurrentUser(storedUser); // User ko state mein save kar rahe hain
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    toast.success("You are logged out");
    navigate("/"); // Page navigate
  };

  return (
    <div>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/CoursesList">
              <img src="images/apple-touch-icon.png" alt="" />{" "}
            </Link>
            <h4 style={{ color: "white" }}>
              <strong style={{ color: "orange" }}>Aptitude</strong>Nexus
            </h4>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbars-host"
              aria-controls="navbars-host"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbars-host">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/CoursesList">
                    Courses
                  </Link>
                </li>
                {Checklogin === "yes" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/Profile">
                      Profile
                    </Link>
                  </li>
                )}
                {Checklogin === "yes" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/UserRequests">
                      Request
                    </Link>
                  </li>
                )}
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  {Checklogin === "NO" ? (
                    <Link
                      className="hover-btn-new log orange"
                      to="/"
                      data-toggle="modal"
                      data-target="#login"
                    >
                      <span>Login/Register</span>
                    </Link>
                  ) : (
                    <a
                      className="hover-btn-new log orange"
                      href="#"
                      data-toggle="modal"
                      data-target="#logout"
                    >
                      <span>Logout</span>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="modal fade"
        id="logout"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header tit-up">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Logout</h4>
            </div>
            <div className="modal-body customer-box">
              <p>Do you really want to logout?</p>
              <button
                className="hover-btn-new orange"
                type="button"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                }}
                onClick={logout}
              >
                Logout
              </button>
              <button
                className="ms-3 hover-btn-new orange"
                type="button"
                style={{
                  backgroundColor: "grey",
                  color: "white",
                }}
                data-dismiss="modal"
                aria-hidden="true"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
