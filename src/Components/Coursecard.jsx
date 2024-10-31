import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Main component to fetch data and render cards
const CardList = () => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null); // Simulating current user ID for demo
  const [currentUser, setCurrentUser] = useState(null); // To hold the current user's info
    const [Checklogin, setChecklogin] = useState("NO");


    useEffect(() => {
    // Fetch courses from API
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course"
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    
 
    // Local storage se user data fetch karna
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setChecklogin("yes")
        setCurrentUser(storedUser); // User ko state mein save kar rahe hain
      }
  
 
    // // Fetch users from API
    // const fetchUsers = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://670388cebd7c8c1ccd41d20e.mockapi.io/Registration"
    //     ); // Your mock user API
    //     const data = await response.json();
    //     setUsers(data);
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //   }
    // };

    fetchCourses();
    // fetchUsers();
  }, []);

  const showModal = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedCourse(null);
    setCurrentUser(null); // Reset current user
  };



const [Percentage,setPercentage] = useState("")

  const  [applyBtnDisabled,setapplyBtnDisabled] = useState(true)
  const [PercentValidity,setPercentValidity] = useState(false)
 const checkPercentage = (e) => {
   const value = e.target.value;
   const criteriaRequired = parseInt(selectedCourse.criteria);
   // if (Percentage >= criteriaRequired && Percentage>99) {
   setPercentage(value);
   if (value >= criteriaRequired && value < 99) {
     setApplyBtnDisabled(false);
     setPercentValidity(false);
   } else {
     setApplyBtnDisabled(true);
     setPercentValidity(true);
   }
 };
//----
  const handleRequest = async (e) => {
    e.preventDefault(); // Prevent default form submission
  const criteriaRequired = parseInt(selectedCourse.criteria);
  if (Percentage >= criteriaRequired && percentage > 99) {
    const newRequest = {
      UserId: currentUser.id,
      userName: currentUser.fname,
      courseTitle: selectedCourse.title,
      percentage: Percentage,
      courseid: selectedCourse.id,
      criteria: selectedCourse.criteria,
      applydate: selectedCourse.date,
      status: "pending", // Initial status
    };

    try {
      const response = await fetch(
        "https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRequest),
        }
      );

      const data = await response.json();
      alert("Request sent to admin for approval.");
      hideModal(); // Close modal after sending the request
    } catch (error) {
      console.error("Error sending request:", error);
    }
  } else {
    alert("Percentage should be 80 or above to apply.");
  }
  };
  return (
    <div style={styles.cardContainer}>
      {courses.slice(0, 3).map((data) => (
        <Card key={data.id} data={data} showModal={showModal} />
      ))}
      {/* .slice(0, 4).map */}
      {/* Modal for registration prompt */}
      {modalVisible && selectedCourse && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            {Checklogin == "yes" ? (
              <>
                <h2>Start Test</h2>
                <p>
                  You are registered. Click the button below to start the test
                  for <strong>{selectedCourse.title}</strong>.
                </p>

                <form className="form-horizontal" onSubmit={handleRequest}>
                  <h3>Your Information:</h3>
                  <div className="form-group row">
                    <label className="col-md-6">Name:</label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        value={currentUser?.fname || "N/A"}
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-6">Email:</label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        value={currentUser?.email || "N/A"}
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-6">Applying for:</label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        value={selectedCourse.title || "N/A"}
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-6">Percentage:</label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        value={Percentage}
                        onChange={checkPercentage}
                        className="form-control"
                      />
                      <span
                        style={
                          PercentValidity === false
                            ? { display: "none" }
                            : { color: "red" }
                        }
                      >
                        *Percentage should be more than 40
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="row g-0">
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="hover-btn-new orange"
                        style={{
                          backgroundColor: "orange",
                          color: "white",
                        }}
                        disabled={applyBtnDisabled}
                      >
                        Apply
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button onClick={hideModal} style={styles.closeButton}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              // <>
              //   <h2>Login Required</h2>
              //   <p>
              //     To register for <strong>{selectedCourse.title}</strong>,
              //     please Login first.
              //   </p>
              //   <button onClick={hideModal} style={styles.closeButton}>
              //     Close
              //   </button>
              // </>
              <>
                <h2>Login Required</h2>
                <p>
                  To registerrr for <strong>{selectedCourse.title}</strong>,
                  please Login first.
                </p>
                <button onClick={hideModal} style={styles.closeButton}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Card component to display individual course information
const Card = ({ data, showModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          ...styles.cardContent,
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Image side */}
        <div style={styles.cardImage}>
          <img
            src="https://media.licdn.com/dms/image/v2/D561AAQHYYwz5JNRgcA/storylineheaderimage-shrink_400_400/storylineheaderimage-shrink_400_400/0/1692203467724?e=2147483647&v=beta&t=NJ95CE8e4kksVaGxwQnNUxAb5IKYyGkQK-duCi95e_0" // Placeholder image
            alt={data.title}
            style={styles.image}
          />
          <div style={styles.titleOverlay}>
            <h4 style={styles.titleText}>{data.title}</h4>
          </div>
        </div>
        {/* Description side */}
        <div style={styles.cardDescription}>
          <h4 style={styles.infoText}>{data.title}</h4>
          <p style={styles.infoText}>
            <strong>Total Marks:</strong> {data.tota_marks}
          </p>
          {/* <p style={styles.infoText}>
            <strong>Description:</strong> {data.descrption}
          </p> */}
          <p style={styles.infoText}>
            <strong>Topics:</strong> {data.topics_cover}
          </p>
          <p style={styles.infoText}>
            <strong style={{ color: "green" }}>Date:</strong> {data.date}
          </p>
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={() => showModal(data)}
            style={styles.button}
          >
            <span>Enroll Now</span>
          </button> */}
          <div class="pricing-table-sign-up">
            <Link
              to=""
              class="hover-btn-new orange"
              onClick={() => showModal(data)}
            >
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "250px",
    height: "250px",
    perspective: "1000px",
    margin: "20px",
  },
  cardContent: {
    width: "100%",
    height: "100%",
    position: "relative",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
  },
  cardImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  titleOverlay: {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "5px 8px",
    borderRadius: "5px",
  },
  titleText: {
    margin: 0,
    fontSize: "14px",
  },
  cardDescription: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#fff",
    padding: "5px",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  infoText: {
    fontSize: "10px",
    margin: "2px 0",
  },
  button: {
    marginTop: "5px",
    padding: "5px 10px",
    backgroundColor: "#FFA500",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "10px",
    transition: "background-color 0.3s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
  },
  closeButton: {
   backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  disabled:{
    backgroundColor: "#91630fd0",
    marginTop: "10px",
    padding: "5px 10px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  userInfoForm: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
};

// Exporting component
export default CardList;
