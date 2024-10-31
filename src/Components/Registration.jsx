import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    nic: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "nic") {
      const formattedValue = formatNIC(value);
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
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

  const validateForm = () => {
    const { fname, lname, gender, nic, email, dob, password, confirmPassword } =
      formData;

    if (!fname) {
      toast.error("First Name is required!");
      return false;
    }
    if (!lname) {
      toast.error("Last Name is required!");
      return false;
    }
    if (!gender) {
      toast.error("Gender is required!");
      return false;
    }
    if (!nic) {
      toast.error("NIC is required!");
      return false;
    }
    const nicPattern = /^\d{4}-\d{4}-\d{3}$/; // NIC format: 1234-5678-901
    if (!nicPattern.test(nic)) {
      toast.error("NIC must be in the format 1234-5678-901!");
      return false;
    }
    if (!email) {
      toast.error("Email is required!");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (!dob) {
      toast.error("Date of Birth is required!");
      return false;
    }
    if (!password) {
      toast.error("Password is required!");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://670388cebd7c8c1ccd41d20e.mockapi.io/Registration",
        formData
      );
      toast.success("Registration successful!");
      console.log(response.data);
      setFormData({
        fname: "",
        lname: "",
        gender: "",
        nic: "",
        email: "",
        dob: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            className="form-control"
            name="fname"
            placeholder="First Name"
            type="text"
            required
            value={formData.fname}
            onChange={handleChange}
            style={{
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            className="form-control"
            name="lname"
            placeholder="Last Name"
            type="text"
            required
            value={formData.lname}
            onChange={handleChange}
            style={{
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <select
            className="form-control"
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            style={{
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <input
            className="form-control"
            name="nic"
            placeholder="NIC "
            type="text"
            required
            value={formData.nic}
            onChange={handleChange}
            style={{
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            className="form-control"
            name="dob"
            type="date"
            required
            value={formData.dob}
            onChange={handleChange}
            style={{
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <div style={{ position: "relative" }}>
            <input
              className="form-control"
              name="password"
              placeholder="Password"
              type={passwordVisible ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              style={{
                borderRadius: "5px",
                paddingRight: "40px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? "fa-eye" : "fa-eye-slash"}
              />
            </span>
          </div>
        </div>
        <div className="form-group col-md-6">
          <div style={{ position: "relative" }}>
            <input
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password"
              type={confirmPasswordVisible ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                borderRadius: "5px",
                paddingRight: "40px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            />
            <span
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? "fa-eye" : "fa-eye-slash"}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="form-group">
        <button
          className="hover-btn-new orange"
          type="submit"
          style={{
            backgroundColor: "orange",
            color: "white",
          }}
        >
          Register
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Registration;
