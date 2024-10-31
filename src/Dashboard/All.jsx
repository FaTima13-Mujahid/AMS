import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/images/dashboard.png"; // You can uncomment and use if needed
// import Avatar from "../assets/images/avatar.png"; // Your avatar image path

const All = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const subcategories = {
    home: [{ name: "Welcome", path: "Dashboard" }],
    courses: [
      { name: "Create", path: "Test" },
      { name: "List", path: "List" },
    ],
    users: [
      { name: "Request List", path: "Request" },
      { name: "Users List", path: "Accounts" },
    ],
    mcqs: [
      { name: "Create", path: "Insert" },
      { name: "List", path: "Data" },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  const handleNavigate = (path) => {
    navigate(`/All/${path}`);
  };

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // console.log("Logout clicked");
    localStorage.removeItem("Admin");
    toast.success("you are Logout")
      setTimeout(() => {
        navigate("/");
      }, 1000);
    // navigate('/');
    // Add your logout functionality here
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          width: sidebarOpen ? "300px" : "0",
          backgroundColor: "#0492C2",
          padding: sidebarOpen ? "20px" : "0",
          position: "fixed",
          height: "100%",
          overflowY: "hidden", // Disable vertical scroll inside the sidebar
          transition: "width 0.3s, padding 0.3s",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
          {/* <img
            src={Logo}
            alt="Logo"
            style={{
              width: "100%",
              maxWidth: "300px",
              marginBottom: "20px",
              height: "90px",
              display: sidebarOpen ? "block" : "none",
            }}
          /> */}
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "White",
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            Dashboard
          </h3>
        </div>
        <hr />
        <ul className="nav flex-column" id="sidebar" role="tablist">
          {/* Home */}
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link btn btn-link text-white d-flex align-items-center"
              style={{ fontSize: "18px", padding: "10px" }}
              onClick={() => handleTabClick("home")}
            >
              <i
                className="fas fa-home"
                style={{ padding: "30px", color: "white", fontSize: "1.25rem" }}
              />
              <span>Home</span>
            </button>
            {activeTab === "home" && (
              <ul className="dropdown-menu show position-static">
                {subcategories.home.map((subcategory) => (
                  <li key={subcategory.path}>
                    <button
                      className="dropdown-item d-flex align-items-center"
                      onClick={() => handleNavigate(subcategory.path)}
                    >
                      <span>{subcategory.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Courses */}
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link btn btn-link text-white d-flex align-items-center"
              style={{ fontSize: "18px", padding: "10px" }}
              onClick={() => handleTabClick("courses")}
            >
              <i
                className="fas fa-cogs"
                style={{ padding: "30px", color: "white", fontSize: "1.25rem" }}
              />
              <span>Courses</span>
            </button>
            {activeTab === "courses" && (
              <ul className="dropdown-menu show position-static">
                {subcategories.courses.map((subcategory) => (
                  <li key={subcategory.path}>
                    <button
                      className="dropdown-item d-flex align-items-center"
                      onClick={() => handleNavigate(subcategory.path)}
                    >
                      <span>{subcategory.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Users */}
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link btn btn-link text-white d-flex align-items-center"
              style={{ fontSize: "18px", padding: "10px" }}
              onClick={() => handleTabClick("users")}
            >
              <i
                className="fas fa-box-open"
                style={{ padding: "30px", color: "white", fontSize: "1.25rem" }}
              />
              <span>Users</span>
            </button>
            {activeTab === "users" && (
              <ul className="dropdown-menu show position-static">
                {subcategories.users.map((subcategory) => (
                  <li key={subcategory.path}>
                    <button
                      className="dropdown-item d-flex align-items-center"
                      onClick={() => handleNavigate(subcategory.path)}
                    >
                      <span>{subcategory.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* MCQ'S */}
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link btn btn-link text-white d-flex align-items-center"
              style={{ fontSize: "18px", padding: "10px" }}
              onClick={() => handleTabClick("mcqs")}
            >
              <i
                className="fas fa-info-circle"
                style={{ padding: "30px", color: "white", fontSize: "1.25rem" }}
              />
              <span>MCQ'S</span>
            </button>
            {activeTab === "mcqs" && (
              <ul className="dropdown-menu show position-static">
                {subcategories.mcqs.map((subcategory) => (
                  <li key={subcategory.path}>
                    <button
                      className="dropdown-item d-flex align-items-center"
                      onClick={() => handleNavigate(subcategory.path)}
                    >
                      <span>{subcategory.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="content"
        style={{
          marginLeft: sidebarOpen ? "300px" : "0",
          flex: "1",
          transition: "margin-left 0.3s",
          padding: "20px",
          height: "calc(100vh - 60px)", // Adjust to account for the header height
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        {/* Header with Avatar Dropdown */}
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#0492C2",
            color: "#fff",
            position: "fixed",
            top: "0",
            left: sidebarOpen ? "300px" : "0",
            right: "0",
            zIndex: 1000,
          }}
        >
          <h2></h2>
          <div className="avatar-dropdown">
            {" "}
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSidebar}
              style={{
                position: "absolute",
                backgroundColor: "transparent",
                border: "1px solid green",
                top: "5px",
                left: sidebarOpen ? "10px" : "20px",
              }}
            >
              {sidebarOpen ? "X" : "|||"}
              
            </button>
            
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hVD057f1k0L7qWnBgnKYFZTNOMcq0Az71g&s"
              alt="Avatar"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              className="dropdown-toggle"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
          
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar Toggle Button */}

        {/* Content below the header */}
        <div style={{ marginTop: "60px" }}>
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default All;
