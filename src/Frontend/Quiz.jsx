import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams(); // Use the course ID from the URL
  const [quizs, setQuizs] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [userTestData, setUserTestData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();



  // mcqs fetching
  useEffect(() => {
    const fetchMCQs = async () => {
      try {
        const response = await fetch(
          `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${id}/MCQS`
        );
        const data = await response.json();
        setQuizs(data);
      } catch (error) {
        console.error("Error fetching MCQs:", error);
      }
    };

    fetchMCQs();
  }, []);


  //user data fetching
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData && userData.isLogin) {
          const response = await fetch(
            "https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest"
          );
          const userTest = await response.json();
          const userTestRecord = userTest.find(
            (record) => record.UserId === userData.id
          );
          setUserTestData(userTestRecord);
          setUserInfo({
            name: `${userData.fname} ${userData.lname}`,
            email: userData.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  //option change
  const handleOptionChange = (option) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      if (option === quizs[currentQuestionIndex]?.correct_option) {
        setMarks(
          (prevMarks) =>
            prevMarks + parseInt(quizs[currentQuestionIndex]?.marks)
        );
      }
    }
  };

  //handle next question button
  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };


  //RESULT
  const handleShowResult = async () => {
    setShowResult(true);

    // Prepare the data to update the user test record
    const updatedData = {
      Obtained_marks: marks || userTestData?.Obtained_marks,
      CorrectAns: calculateCorrectAnswers() || userTestData?.CorrectAns,
      WrongAns: calculateWrongAnswers() || userTestData?.WrongAns,
      Percentage: ((marks / 100) * 100).toFixed(2) || userTestData?.Percentage,
      status: marks >= 50 ? "Passed" : "Failed",
      remarks: marks >= 50 ? "Good" : "Needs Improvement",
    };

    try {
      // Update the user test record in the MockAPI
      const response = await fetch(
        `https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest/${userTestData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user test data");
      }

      const updatedRecord = await response.json();
      console.log("Updated Record:", updatedRecord);
    } catch (error) {
      console.error("Error updating user test data:", error);
    }
  };


  //correct index
  const calculateCorrectAnswers = () => {
    return quizs.reduce((count, quiz) => {
      return quiz.correct_option === selectedAnswer ? count + 1 : count;
    }, 0);
  };

  // wrong answer calculation
  const calculateWrongAnswers = () => {
    return currentQuestionIndex + 1 - calculateCorrectAnswers();
  };


  //styling
  const styles = {
    modal: {
      position: "fixed",
      zIndex: 1000,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with opacity
    },
    modalContent: {
      backgroundColor: "#fff",
      margin: "15% auto",
      padding: "20px",
      border: "1px solid #888",
      width: "80%", // Width of the modal
    },
  };

  return (
    <section
      className="quiz-section"
      style={{
        padding: "100px",
        backgroundImage:
          "url('https://www.epravesh.com/blog/wp-content/uploads/2015/12/Online%20Test%20Series.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="container"
        style={{ backgroundColor: "#F0F8FF", color: "black", height: "150px" }}
      >
        {userInfo && (
          <div className="contianer" style={{ marginBottom: "10px" }}>
            <div className="row text-dark mb-4">
              <center>
                <h1>Aptitude Test</h1>
              </center>
              <div className="col-md-6">
                <h5>Name: {userInfo.name}</h5>
                <h5>Email: {userInfo.email}</h5>
              </div>
              <div className="col-md-6">
                <h5>Duration: 30 Minutes</h5>
                <h5>Total Marks: 100</h5>
                {userTestData && (
                  <div>
                    {/* <h5>Course Title: {userTestData.courseTitle}</h5> */}
                    {/* <p>{userTestData.description}</p> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {quizs.length > 0 ? (
          <>
            {currentQuestionIndex < quizs.length ? (
              <div
                className="card p-4"
                style={{
                  //  marginBottom:"199px",
                  background: "rgba(255, 255, 255, 0.8)",
                  color: "grey",
                  maxWidth: "700px",
                  maxHeight: "800px",
                  margin: "auto",
                }}
              >
                <h5>{quizs[currentQuestionIndex]?.question}</h5>
                <div>
                  {/* calling quiz option */}
                  {[
                    quizs[currentQuestionIndex]?.option_1,
                    quizs[currentQuestionIndex]?.option_2,
                    quizs[currentQuestionIndex]?.option_3,
                  ].map((item, index) => {
                    const isCorrect =
                      item === quizs[currentQuestionIndex]?.correct_option;
                    const isSelected = selectedAnswer === item;
                    const radioId = `option-${currentQuestionIndex}-${index}`;

                    return (
                      <div className="form-check mt-3" key={index}>
                        <input
                          type="radio"
                          id={radioId}
                          name="quizOption"
                          value={item}
                          className={`form-check-input ${
                            isSelected
                              ? isCorrect
                                ? "bg-success"
                                : "bg-danger"
                              : ""
                          }`}
                          checked={isSelected}
                          onChange={() => handleOptionChange(item)}
                          disabled={!!selectedAnswer}
                        />
                        <label
                          htmlFor={radioId}
                          className={`form-check-label ${
                            isSelected
                              ? isCorrect
                                ? "bg-success"
                                : "bg-danger"
                              : "text-dark"
                          }`}
                        >
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </div>
                {currentQuestionIndex + 1 === quizs.length ? (
                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleShowResult}
                  >
                    Show Result
                  </button>
                ) : (
                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                  >
                    Next Question
                  </button>
                )}
              </div>
            ) : null}
          </>
        ) : (
          <p>No questions available for this test.</p>
        )}

        {/* SHOW RESULT MODAL */}
        {showResult && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            id="login"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header tit-up">
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowResult(false)}
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                  <h4 className="modal-title">RESULT</h4>
                </div>
                <div className="modal-body customer-box">
                  <div className="tab-content">
                    <div className="tab-pane active" id="Login">
                      <h5>Your Results</h5>
                      <p>
                        <strong>Name:</strong> {userInfo?.name}
                      </p>
                      <p>
                        <strong>Course Title:</strong>{" "}
                        {userTestData?.courseTitle}
                      </p>
                      <p>
                        <strong>Obtained Marks:</strong> {marks}
                      </p>
                      <p>
                        <strong>Correct Answers:</strong>{" "}
                        {calculateCorrectAnswers()}
                      </p>
                      <p>
                        <strong>Wrong Answers:</strong>{" "}
                        {calculateWrongAnswers()}
                      </p>
                      <p>
                        <strong>Percentage:</strong>{" "}
                        {((marks / 100) * 100).toFixed(2)}%
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {marks >= 50 ? "Passed" : "Failed"}
                      </p>
                      <p>
                        <strong>Remarks:</strong>{" "}
                        {marks >= 50 ? "Good" : "Needs Improvement"}
                      </p>
                      <p>
                        <strong>Application Date:</strong>{" "}
                        {userTestData?.applydate}
                      </p>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate("/")}
                      >
                        BACK TO HOME
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
