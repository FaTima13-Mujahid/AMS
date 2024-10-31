import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Test = () => {
  const [testId, setTestId] = useState(""); // Test ID 
  const [title, setTitle] = useState(""); // Title 
  const [totalMarks, setTotalMarks] = useState(""); // Total Marks
  const [description, setDescription] = useState(""); // Description 
  const [topicsToCover, setTopicsToCover] = useState(""); // Topics 
  const [date, setDate] = useState(""); // Date 

  // Handle submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Form submit hone par default action ko roknay ke liye

    // Validation for empty fields
    if (!title || !totalMarks || !description || !topicsToCover || !date) {
      toast.error("All fields are required!", { position: "top-center" }); // Agar koi field khali hai toh error message
      return;
    }

    const newTest = {
      title,
      descrption: description, // Description ko store karna
      tota_marks: totalMarks, // Total Marks ko store karna
      topics_cover: topicsToCover
        .split(",")
        .map((topic) => topic.trim())
        .join(", "), // Topics 

      // date: Math.floor(new Date(date).getTime() / 1000),
      date:date // Date 
    };

    try {
      const response = await fetch(
        "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course", // API URL 
        {
          method: "POST", // POST method use karna
          headers: {
            "Content-Type": "application/json", // Request ka content type JSON hai
          },
          body: JSON.stringify(newTest), // Naya test ko JSON format mein bhejna
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok"); 
      }

      const data = await response.json(); // JSON format mein read
      console.log("New Test added:", data); 
      toast.success("Data entered successfully!", { position: "top-center" }); // Success message 

      // Reset form fields after successful submission
      setTitle(""); // Title  reset 
      setTotalMarks(""); // Total Marks  reset 
      setDescription(""); // Description  reset 
      setTopicsToCover(""); // Topics  reset krna
      setDate(""); // Date  reset 
    } catch (error) {
      console.error("Error:", error); // Agar koi error aaye toh console par print karna
      toast.error("Failed to submit data!", { position: "top-center" }); // Error message dikhana
    }
  };

  return (
    <div className="container">
      <ToastContainer /> {/* Toast messages ko dikhane ke liye container */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <center>
            <h3>Aptitude Courses</h3> {/* Page ka title */}
          </center>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {" "}
              {/* Form submission par handleSubmit function call hoga */}
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title} // Title state se value
                  onChange={(e) => setTitle(e.target.value)} // Title ko update karne ke liye
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Total Marks</label>
                <input
                  type="number"
                  className="form-control"
                  value={totalMarks} // Total Marks state se value
                  onChange={(e) => setTotalMarks(e.target.value)} // Total Marks ko update karne ke liye
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  value={description} // Description state se value
                  onChange={(e) => setDescription(e.target.value)} // Description ko update karne ke liye
                  required
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Topics to Cover (comma separated)
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={topicsToCover} // Topics state se value
                  onChange={(e) => setTopicsToCover(e.target.value)} // Topics ko update karne ke liye
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date} // Date state se value
                  onChange={(e) => setDate(e.target.value)} // Date ko update karne ke liye
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit {/* Form submit karne ke liye button */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
