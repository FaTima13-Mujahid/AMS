import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check for admin credentials
    if (nic === "1111-1111-111" && password === "admin") {
      localStorage.setItem(
        "Admin",
        JSON.stringify({ isLogin: true, rol: "Admin" })
      );
       toast.success("Admin Login successful!");
    
      setTimeout(() => {
         navigate("/All/Dashboard");
      }, 1000);
      return;
    }

    // Validate user against mock API
    try {
      const response = await axios.get(
        `https://670388cebd7c8c1ccd41d20e.mockapi.io/Registration`
      );
      const users = response.data;
      const user = users.find((u) => u.nic === nic && u.password === password);

      if (user) {
        // Save user's fname and email in local storage
        // localStorage.setItem("courseId", userData.courseId);

        localStorage.setItem(
          "user",
          JSON.stringify({
            isLogin: true,
            id: user.id,
            fname: user.fname,
            email: user.email,
            lname: user.lname,
            gender: user.gender,
            nic: user.nic,
            dob:user.dob
          })
        );
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/CoursesList");
        }, 1000);
      } else {
        toast.error("Invalid NIC or Password!");
      }
    } catch (error) {
      toast.error("Error fetching user data.");
      console.error(error);
    }
  };

  const formatNIC = (value) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "");
    // Format: 1234-5678-901
    if (digits.length <= 4) return digits;
    if (digits.length <= 8) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8, 11)}`;
  };

  const handleNICChange = (e) => {
    const formattedValue = formatNIC(e.target.value);
    setNic(formattedValue);
  };

  return (
    <form
      role="form"
      className="form-horizontal"
      onSubmit={handleLogin}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "white",
      }}
    >
      <div className="form-group">
        <input
          className="form-control"
          placeholder="NIC (e.g., 1111-1111-111)"
          type="tel"
          value={nic}
          onChange={handleNICChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="row">
        <div className="col-sm-10">
          <div className="form-group">
            <button
              className="hover-btn-new orange"
              type="submit"
              style={{
                backgroundColor: "orange",
                color: "white",
              }}
            >
              Login Here
            </button>
          </div>
          <a className="for-pwd" href="javascript:;">
            Forgot your password?
          </a>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;
