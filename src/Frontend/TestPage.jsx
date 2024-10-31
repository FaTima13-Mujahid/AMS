// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Quiz = () => {
//   const { id } = useParams(); // Use the testId from the URL

//   const { testId } = useParams(); // Use the testId from the URL
//   const [quizs, setQuizs] = useState([]);
//   const [courseInfo, setCourseInfo] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [marks, setMarks] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [userInfo, setUserInfo] = useState(null);
//   const [userTestData, setUserTestData] = useState(null);
//   const [courseAccepted, setCourseAccepted] = useState(false); // State for course acceptance message

//   // Fetch course details from the API based on the test ID
//   // Uncomment this if you want to fetch course details
//   // useEffect(() => {
//   //   const fetchCourseInfo = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course"
//   //       );
//   //       const courses = await response.json();
//   //       console.log("Courses fetched from API:", courses);

//   //       // Ensure both testId and course.id are compared as strings
//   //       const selectedCourse = courses.find(
//   //         (course) => String(course.id) === String(testId)
//   //       );
//   //       console.log("Selected Course for TestId:", selectedCourse);

//   //       setCourseInfo(selectedCourse);
//   //       if (selectedCourse) {
//   //         setCourseAccepted(true);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching course info:", error);
//   //     }
//   //   };

//   //   fetchCourseInfo();
//   // }, [testId]);

//   // Fetch MCQs only for the selected test based on the test ID
//   useEffect(() => {
//     const fetchMCQs = async (testId) => {
//       try {
//         const response = await fetch(
//           `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${id}/MCQS`
//         );
//         const data = await response.json();
//         console.log(id);
//         console.log("API Response:", data); // Log the full response

//         // Check if the response is an array or an object containing an array
//         if (Array.isArray(data)) {
//           // Filter the MCQs by TestId
//           const filteredQuiz = data.filter((quiz) => quiz.testId === testId);
//           console.log("Filtered Quiz for TestId:", filteredQuiz);
//           setQuizs(filteredQuiz);
//         } else if (Array.isArray(data.quizzes)) {
//           // If the data is wrapped in an object
//           const filteredQuiz = data.quizzes.filter(
//             (quiz) => quiz.testId === testId
//           );
//           console.log("Filtered Quiz for TestId from quizzes:", filteredQuiz);
//           setQuizs(filteredQuiz);
//         } else {
//           console.error("Fetched data does not contain an array of quizzes.");
//         }
//       } catch (error) {
//         console.error("Error fetching MCQs:", error);
//       }
//     };

//     fetchMCQs(testId);
//   });

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const userData = JSON.parse(localStorage.getItem("user"));

//         if (userData && userData.isLogin) {
//           const userId = userData.id; // Adjust logic to retrieve user ID from user data

//           const response = await fetch(
//             "https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest"
//           );
//           const data = await response.json();
//           const userTest = data.find((test) => test.UserId === userId);
//           setUserTestData(userTest);

//           setUserInfo({
//             name: `${userData.fname} ${userData.lname}`,
//             email: userData.email,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   const handleOptionChange = (option) => {
//     if (!selectedAnswer) {
//       setSelectedAnswer(option);
//       if (option === quizs[currentQuestionIndex]?.correct_option) {
//         setMarks(
//           (prevMarks) =>
//             prevMarks + parseInt(quizs[currentQuestionIndex]?.marks)
//         );
//       }
//     }
//   };

//   const handleNextQuestion = () => {
//     setSelectedAnswer("");
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const handleShowResult = () => {
//     setShowResult(true);
//   };

//   const handleStartOver = () => {
//     setCurrentQuestionIndex(0);
//     setMarks(0);
//     setShowResult(false);
//     setSelectedAnswer("");
//   };

//   const calculateCorrectAnswers = () => {
//     return quizs.reduce((count, quiz) => {
//       return quiz.correct_option === selectedAnswer ? count + 1 : count;
//     }, 0);
//   };

//   const calculateWrongAnswers = () => {
//     return currentQuestionIndex + 1 - calculateCorrectAnswers();
//   };

//   return (
//     <section
//       className="quiz-section"
//       style={{
//         padding: "100px",
//         backgroundImage:
//           "url('https://www.epravesh.com/blog/wp-content/uploads/2015/12/Online%20Test%20Series.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <div className="container">
//         {userInfo && (
//           <div className="row text-white mb-4">
//             <div className="col-md-6">
//               <h5>Name: {userInfo.name}</h5>
//               <h5>Email: {userInfo.email}</h5>
//             </div>
//             <div className="col-md-6">
//               <h5>Course: {id}</h5>
//               {courseInfo && (
//                 <div>
//                   <h5>Course Title: {courseInfo.title}</h5>
//                   <p>{courseInfo.description}</p>
//                   <p>Total Marks: {courseInfo.total_marks}</p>
//                   <p>Topics Covered: {courseInfo.topics_cover}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {quizs.length > 0 ? (
//           <>
//             {currentQuestionIndex < quizs.length ? (
//               <div
//                 className="card p-4"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.8)",
//                   color: "grey",
//                   maxWidth: "700px",
//                   maxHeight: "800px",
//                   margin: "auto",
//                 }}
//               >
//                 <h5>{quizs[currentQuestionIndex]?.question}</h5>
//                 <div>
//                   {[
//                     quizs[currentQuestionIndex]?.option_1,
//                     quizs[currentQuestionIndex]?.option_2,
//                     quizs[currentQuestionIndex]?.option_3,
//                   ].map((item, index) => {
//                     const isCorrect =
//                       item === quizs[currentQuestionIndex]?.correct_option;
//                     const isSelected = selectedAnswer === item;
//                     const radioId = `option-${currentQuestionIndex}-${index}`;

//                     return (
//                       <div className="form-check mt-3" key={index}>
//                         <input
//                           type="radio"
//                           id={radioId}
//                           name="quizOption"
//                           value={item}
//                           className={`form-check-input ${
//                             isSelected
//                               ? isCorrect
//                                 ? "bg-success"
//                                 : "bg-danger"
//                               : ""
//                           }`}
//                           checked={isSelected}
//                           onChange={() => handleOptionChange(item)}
//                           disabled={!!selectedAnswer}
//                         />
//                         <label
//                           htmlFor={radioId}
//                           className={`form-check-label ${
//                             isSelected
//                               ? isCorrect
//                                 ? "bg-success"
//                                 : "bg-danger"
//                               : "text-dark"
//                           }`}
//                         >
//                           {item}
//                         </label>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {currentQuestionIndex + 1 === quizs.length ? (
//                   <button
//                     className="btn btn-primary w-100 mt-3"
//                     onClick={handleShowResult}
//                   >
//                     Show Result
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-primary w-100 mt-3"
//                     onClick={handleNextQuestion}
//                     disabled={!selectedAnswer}
//                   >
//                     Next Question
//                   </button>
//                 )}
//               </div>
//             ) : null}
//           </>
//         ) : (
//           <p>No questions available for this test.</p>
//         )}

//         {showResult && (
//           <div
//             className="modal fade show"
//             style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
//           >
//             <div className="modal-dialog modal-dialog-centered">
//               <div
//                 className="modal-content"
//                 style={{
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               >
//                 <div className="modal-header">
//                   <h5 className="modal-title">Result</h5>
//                   <button
//                     type="button"
//                     className="close"
//                     onClick={handleStartOver}
//                   >
//                     &times;
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <p>Total Questions: {quizs.length}</p>
//                   <p>Correct Answers: {calculateCorrectAnswers()}</p>
//                   <p>Wrong Answers: {calculateWrongAnswers()}</p>
//                   <p>Total Marks: {marks}</p>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={handleStartOver}
//                   >
//                     Start Over
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Quiz;
