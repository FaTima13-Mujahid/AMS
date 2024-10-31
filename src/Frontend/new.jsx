// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// const CardList = () => {
//   const [courses, setCourses] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [Checklogin, setChecklogin] = useState("NO");
//   const [Percentage, setPercentage] = useState("");
//   const [applyBtnDisabled, setApplyBtnDisabled] = useState(true);
//   const [PercentValidity, setPercentValidity] = useState(false);
//   const [userRequests, setUserRequests] = useState([]);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setChecklogin("yes");
//       setCurrentUser(storedUser);

//       // Fetch user requests
//       const fetchUserRequests = async () => {
//         try {
//           const response = await fetch(
//             "https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest"
//           );
//           const requests = await response.json();
//           const userCourses = requests.filter(
//             (request) => request.userName === storedUser.fname
//           );
//           setUserRequests(userCourses);
//         } catch (error) {
//           console.error("Error fetching user requests:", error);
//         }
//       };

//       fetchUserRequests();
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(
//           "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course"
//         );
//         const data = await response.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);
//   //showmdal
//   const showModal = (course) => {
//     setSelectedCourse(course);
//     setModalVisible(true);
//   };
//   //modal hiding
//   const hideModal = () => {
//     setModalVisible(false);
//     setSelectedCourse(null);
//     setPercentage(""); // Reset percentage when modal closes
//     setApplyBtnDisabled(true); // Reset apply button state
//     setPercentValidity(false); // Reset validity message
//   };
//   //percentage cheKING
//   const checkPercentage = (e) => {
//     const value = e.target.value;
//     const criteriaRequired = parseInt(selectedCourse.criteria);
//     // if (Percentage >= criteriaRequired && Percentage>99) {
//     setPercentage(value);
//     if (value >= criteriaRequired && value < 99) {
//       setApplyBtnDisabled(false);
//       setPercentValidity(false);
//     } else {
//       setApplyBtnDisabled(true);
//       setPercentValidity(true);
//     }
//   };
//   //admin request
//   const hasApplied = userRequests.some(
//     (request) => request.courseTitle === selectedCourse?.title
//   );

//   const handleRequest = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     if (hasApplied) {
//       alert("You have already applied for this course.");
//       return;
//     }
//     const criteriaRequired = parseInt(selectedCourse.criteria);

//     const newRequest = {
//       UserId: currentUser.id,
//       userName: currentUser.fname,
//       courseTitle: selectedCourse.title,
//       percentage: Percentage,
//       courseid: selectedCourse.id,
//       criteria: selectedCourse.criteria,
//       status: "pending", // Initial status
//     };

//     try {
//       const response = await fetch(
//         "https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newRequest),
//         }
//       );

//       const data = await response.json();
//       alert("Request sent to admin for approval.");
//       hideModal(); // Close modal after sending the request
//     } catch (error) {
//       console.error("Error sending request:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="all-title-box">
//         <div className="container text-center">
//           <h1>
//             Hey,
//             <span className="m_4">
//               {currentUser ? currentUser.fname : "Guest"}
//             </span>
//           </h1>
//         </div>
//       </div>

//       <div id="overviews" className="section wb">
//         <div className="container">
//           <div className="section-title row text-center">
//             <div className="col-md-8 offset-md-2">
//               <p className="lead">
//                 Our curated aptitude courses are designed to enhance your
//                 logical reasoning, problem-solving, and analytical skills. Each
//                 course covers a wide range of topics, including mathematics,
//                 critical thinking, and verbal ability, ensuring comprehensive
//                 preparation. Whether you're preparing for competitive exams or
//                 sharpening your mental agility, these courses provide
//                 interactive lessons, practice tests, and expert guidance
//                 tailored to boost your performance. Enroll now to challenge
//                 yourself and excel!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <br />
//       <br />
//       <br />
//       <center>
//         <h3>Our Courses</h3>
//       </center>
//       <div style={styles.cardContainer}>
//         {courses.map((data) => (
//           <Card key={data.id} data={data} showModal={showModal} />
//         ))}
//         {modalVisible && selectedCourse && (
//           <div style={styles.modalOverlay}>
//             <div
//               className="modal-dialog modal-lg custom-modal-width"
//               style={styles.modalContent}
//             >
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button type="button" className="close" onClick={hideModal}>
//                     &times;
//                   </button>
//                 </div>
//                 {modalVisible && selectedCourse && (
//                   <div style={styles.modalOverlay}>
//                     <div style={styles.modalContent}>
//                       {Checklogin === "yes" ? (
//                         <>
//                           <h2>Start Test</h2>
//                           {hasApplied && (
//                             <p style={{ color: "red" }}>
//                               You have already applied for this course.
//                             </p>
//                           )}
//                           <p>
//                             You are registered. Click the button below to start
//                             the test for <strong>{selectedCourse.title}</strong>
//                             .
//                           </p>

//                           <form
//                             className="form-horizontal"
//                             onSubmit={handleRequest}
//                           >
//                             <h3>Your Information:</h3>
//                             <div className="form-group row">
//                               <label className="col-md-6">Name:</label>
//                               <div className="col-md-6">
//                                 <input
//                                   type="text"
//                                   value={currentUser?.fname || "N/A"}
//                                   disabled
//                                   className="form-control"
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <label className="col-md-6">Email:</label>
//                               <div className="col-md-6">
//                                 <input
//                                   type="text"
//                                   value={currentUser?.email || "N/A"}
//                                   disabled
//                                   className="form-control"
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <label className="col-md-6">Applying for:</label>
//                               <div className="col-md-6">
//                                 <input
//                                   type="text"
//                                   value={selectedCourse.title || "N/A"}
//                                   disabled
//                                   className="form-control"
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-group row">
//                               <label className="col-md-6">Percentage:</label>
//                               <div className="col-md-6">
//                                 <input
//                                   type="text"
//                                   value={Percentage}
//                                   onChange={checkPercentage}
//                                   className="form-control"
//                                 />
//                                 <span
//                                   style={
//                                     PercentValidity === false
//                                       ? { display: "none" }
//                                       : { color: "red" }
//                                   }
//                                 >
//                                   *Percentage should be more{" "}
//                                   {selectedCourse.criteria}
//                                 </span>
//                               </div>
//                             </div>
//                             <br />
//                             <div className="row g-0">
//                               <div className="col-md-6">
//                                 <button
//                                   type="submit"
//                                   className="hover-btn-new orange"
//                                   style={{
//                                     backgroundColor: "orange",
//                                     color: "white",
//                                   }}
//                                   disabled={applyBtnDisabled}
//                                 >
//                                   Apply
//                                 </button>
//                               </div>
//                               <div className="col-md-6">
//                                 <button
//                                   onClick={hideModal}
//                                   style={styles.closeButton}
//                                 >
//                                   Cancel
//                                 </button>
//                               </div>
//                             </div>
//                           </form>
//                         </>
//                       ) : (
//                         <>
//                           <h2>Login Required</h2>
//                           <p>
//                             To register for{" "}
//                             <strong>{selectedCourse.title}</strong>, please
//                             Login first.
//                           </p>
//                           <button
//                             onClick={hideModal}
//                             style={styles.closeButton}
//                           >
//                             Close
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <br />
//       <br />
//       <br />
//       <Footer />
//     </>
//   );
// };

// // Card component to display individual course information
// const Card = ({ data, showModal }) => {
//   const courseDate = new Date(data.date * 1000); // Convert course date from UNIX timestamp
//   const today = new Date();
//   const isTestToday = courseDate.toDateString() === today.toDateString();
//   const isExpired = courseDate < today;

//   return (
//     // <div style={styles.card} onClick={() => showModal(data)}>
//     <div style={styles.card}>
//       <div style={styles.cardContent}>
//         <div style={styles.cardImage}>
//           <img
//             src="https://media.licdn.com/dms/image/v2/D561AAQHYYwz5JNRgcA/storylineheaderimage-shrink_400_400/storylineheaderimage-shrink_400_400/0/1692203467724?e=2147483647&v=beta&t=NJ95CE8e4kksVaGxwQnNUxAb5IKYyGkQK-duCi95e_0"
//             alt={data.title}
//             style={styles.image}
//           />
//           <div style={styles.titleOverlay}>
//             <h4 style={styles.titleText}>{data.title}</h4>
//           </div>
//         </div>
//         <div style={styles.cardDescription}>
//           {/* <h4 style={styles.infoText}>{data.title}</h4> */}
//           <p style={styles.infoText}>
//             <strong>Total Marks:</strong> {data.tota_marks}
//           </p>
//           {/* <p style={styles.infoText}>
//             <strong>Description:</strong> {data.descrption}
//           </p> */}
//           <p style={styles.infoText}>
//             <strong>Criteria:</strong> {data.criteria}% Required
//           </p>
//           <p style={styles.infoText}>
//             <strong>Topics:</strong> {data.topics_cover}
//           </p>
//           <p style={styles.infoText}>
//             <strong style={{ color: "green" }}>Date:</strong> {data.date}
//           </p>

//           <div className="pricing-table-sign-up">
//             {isTestToday ? (
//               <Link
//                 to="#"
//                 className="hover-btn-new orange"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent parent onClick
//                   showModal(data);
//                 }}
//               >
//                 <span>Test Now</span>
//               </Link>
//             ) : isExpired ? (
//               <span style={{ color: "red" }}>Expired</span>
//             ) : (
//               <Link
//                 to="#"
//                 className="hover-btn-new orange"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent parent onClick
//                   showModal(data);
//                 }}
//               >
//                 <span>Enroll Now</span>
//               </Link>
//             )}
//             <Link
//               to={`/course/${data.id}`}
//               style={{ color: "blue", fontSize: "15px", marginLeft: "50px" }}
//             >
//               View Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   cardContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "20px",
//   },
//   card: {
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     width: "300px",
//     // cursor: "pointer",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     overflow: "hidden",
//   },
//   cardContent: {
//     padding: "10px",
//   },
//   cardImage: {
//     position: "relative",
//     height: "150px",
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   titleOverlay: {
//     position: "absolute",
//     bottom: "0",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     color: "#fff",
//     width: "100%",
//     textAlign: "center",
//   },
//   titleText: {
//     margin: "0",
//     padding: "5px",
//   },
//   cardDescription: {
//     marginTop: "10px",
//   },
//   infoText: {
//     margin: "5px 0",
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "60%",
//     maxWidth: "800px",
//   },
//   closeButton: {
//     backgroundColor: "#f44336",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//     borderRadius: "5px",
//   },
// };

// export default CardList;


