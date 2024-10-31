import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal"; // Import the Modal from react-modal

const Data = () => {
  const [mcqs, setMcqs] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMcq, setCurrentMcq] = useState(null);

  // States for modal inputs
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [marks, setMarks] = useState("");

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

  // Fetch MCQs based on the selected course
  useEffect(() => {
    const fetchMcqs = async () => {
      if (selectedCourse) {
        try {
          const response = await axios.get(
            `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${selectedCourse}/MCQS`
          );
          setMcqs(response.data);
        } catch (error) {
          toast.error("Error fetching MCQs");
        }
      } else {
        setMcqs([]); // Reset MCQs if no course is selected
      }
    };

    fetchMcqs();
  }, [selectedCourse]);

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${selectedCourse}/MCQS/${id}`
      );
      toast.success("MCQ deleted successfully!");
      setMcqs(mcqs.filter((mcq) => mcq.id !== id)); // Remove deleted MCQ from state
    } catch (error) {
      toast.error("Error deleting MCQ.");
    }
  };

  // Function to open the modal for editing
  const openModal = (mcq) => {
    setCurrentMcq(mcq);
    setQuestion(mcq.question);
    setOption1(mcq.option_1);
    setOption2(mcq.option_2);
    setOption3(mcq.option_3);
    setCorrectOption(mcq.correct_option);
    setMarks(mcq.marks);
    setModalIsOpen(true);
  };

  // Function to handle the update
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !correctOption ||
      !marks
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      await axios.put(
        `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${selectedCourse}/MCQS/${currentMcq.id}`,
        {
          question,
          option_1: option1,
          option_2: option2,
          option_3: option3,
          correct_option: correctOption,
          marks,
        }
      );
      toast.success("MCQ updated successfully!");
      const updatedMcq = {
        ...currentMcq,
        question,
        option_1: option1,
        option_2: option2,
        option_3: option3,
        correct_option: correctOption,
        marks,
      };
      setMcqs(mcqs.map((mc) => (mc.id === currentMcq.id ? updatedMcq : mc)));
      setModalIsOpen(false);
    } catch (error) {
      toast.error("Error updating MCQ.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>MCQs List</h2>

      {/* Dropdown for Course Selection */}
      <div className="mb-3">
        <label className="form-label">Select Course</label>
        <select
          className="form-control"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {titles.map((title) => (
            <option key={title.id} value={title.id}>
              {title.title}
            </option>
          ))}
        </select>
      </div>

      {/* Displaying MCQs in Card Format */}
      {selectedCourse && mcqs.length > 0 && (
        <div className="row mt-4">
          {mcqs.map((mcq) => (
            <div key={mcq.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Question ID: {mcq.id}</h5>
                  <h5 className="card-title">{mcq.question}</h5>
                  <p className="card-text">
                    <strong>Test ID:</strong> {mcq.Testid} <br />
                    <strong>Options:</strong>
                    <ul>
                      <li>{mcq.option_1}</li>
                      <li>{mcq.option_2}</li>
                      <li>{mcq.option_3}</li>
                    </ul>
                    <strong>Correct Option:</strong> {mcq.correct_option}
                    <br />
                    <strong>Marks:</strong> {mcq.marks}
                  </p>
                  <div>
                    <span className="mx-2">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => openModal(mcq)}
                      >
                        <i className="fas fa-edit"></i>
                        {/* Edit Icon */}
                      </button>
                    </span>
                    <span className="mx-2">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(mcq.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                        {/* Delete Icon */}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {mcqs.length === 0 && (
            <div className="col-12">
              <p>No MCQs available for this course.</p>
            </div>
          )}
        </div>
      )}

      {/* Edit Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={{
          content: {
            maxWidth: "500px", // Set max width for modal
            margin: "auto", // Center the modal
            padding: "20px", // Padding around content
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Background
          },
        }}
      >
        <h2>Edit MCQ</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Question</label>
            <input
              type="text"
              className="form-control"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Option 1</label>
            <input
              type="text"
              className="form-control"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              required
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
              <option value={option1}>{option1}</option>
              <option value={option2}>{option2}</option>
              <option value={option3}>{option3}</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Total Marks</label>
            <input
              type="number"
              className="form-control"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </form>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Data;
