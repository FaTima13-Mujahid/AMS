import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MCQForm = () => {
  // State for Form Fields
  const [testId, setTestId] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [marks, setMarks] = useState("");
  const [titles, setTitles] = useState([]);

  // Fetch Titles from API
  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get(
          "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course"
        );
        setTitles(
          response.data.map((item) => ({ id: item.id, title: item.title }))
        );
      } catch (error) {
        toast.error("Error fetching titles");
      }
    };

    fetchTitles();
  }, []);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = {
      Testid: testId,
      question,
      option_1: option1,
      option_2: option2,
      option_3: option3,
      correct_option: correctOption,
      marks,
      CourseId: testId, // Add CourseId based on the selected testId
    };

    try {
      const response = await axios.post(
        `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${testId}/MCQS`,
        newQuestion // Send the newQuestion object as data
      );
      if (response.status === 201) {
        toast.success("Question added successfully!");
        // Reset the form
        resetForm();
      }
    } catch (error) {
      toast.error("Error adding question.");
    }
  };

  // Reset form function
  const resetForm = () => {
    setTestId("");
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setCorrectOption("");
    setMarks("");
  };

  return (
    <div className="container mt-5">
      <h2>Add MCQ Question</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Test ID</label>
          <select
            className="form-control"
            value={testId}
            onChange={(e) => setTestId(e.target.value)}
            required
          >
            <option value="">Select Test ID</option>
            {titles.map((title) => (
              <option key={title.id} value={title.id}>
                {title.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Question</label>
          <textarea
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            placeholder="Enter question"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Option 1</label>
          <input
            type="text"
            className="form-control"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            required
            placeholder="Enter Option 1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Option 2</label>
          <input
            type="text"
            className="form-control"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            required
            placeholder="Enter Option 2"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Option 3</label>
          <input
            type="text"
            className="form-control"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
            required
            placeholder="Enter Option 3"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correct Option</label>
          <select
            className="form-control"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            required
          >
            <option value="">Select Correct Option</option>
            <option value={option1}>Option 1</option>
            <option value={option2}>Option 2</option>
            <option value={option3}>Option 3</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Marks</label>
          <input
            type="number"
            className="form-control"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            placeholder="Enter Marks"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add MCQ
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default MCQForm;
