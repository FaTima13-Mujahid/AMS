import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const UserRequests = () => {
  const [userRequests, setUserRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
//-----SAVED USER YA STORED USER  k DATA LOCAL STORAGE SA FETCHING
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setCurrentUser(storedUser);
      fetchUserRequests(storedUser.id);
    }
  }, []);
//----FETCHING USER REQUEST
  const fetchUserRequests = async (id) => {
    try {
      const response = await fetch(
        `https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest?UserId=${id}`
      );
      const data = await response.json();
      setUserRequests(data);
    } catch (error) {
      console.error("Error fetching user requests:", error);
    }
  };

  const handleTestStart = (id) => {
    navigate(`/Quiz/${id}`);
    //---ya wo id h jo test user select  KR RAHA HA
    console.log("Id jo uth K ja rae:: ", id);
  };
//----DATE kO FORMATTED kRNA USING BELOW
  const today = new Date().toISOString().split("T")[0]; // Today's date formatted as YYYY-MM-DD

  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <div style={styles.container}>
        <h2>Your Requests</h2>

        {/* if request not found error appear */}
        {userRequests.length === 0 ? (
          <p>No requests found.</p>
        ) : (
          <table className="table table-striped ">
            <thead className="table-primary">
              <tr>
                <th>Username</th>
                <th>Course Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userRequests.map((data) => {
                const courseDate = data.applydate; // Fetch the date using applydate field
                const isToday = courseDate === today;
                const isFuture = courseDate > today;

                return (
                  <tr key={data.id}>
                    <td>{data.userName}</td>
                    <td>{data.courseTitle}</td>
                    <td>{courseDate}</td>
                    <td
                      style={{
                        color: data.status === "Approved" ? "green" : "red",
                      }}
                    >
                      {data.status}
                    </td>
                    <td>
                      {data.status === "Approved" ? (
                        isToday ? (
                          <button
                            onClick={() => handleTestStart(data.courseid)}
                            className="btn btn-success"
                          >
                            Start Test
                          </button>
                        ) : isFuture ? (
                          <span className="text-primary">Upcoming</span>
                        ) : (
                          <span className="text-danger">Expired</span>
                        )
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};


//---container styling
const styles = {
  container: {
   
    maxWidth: "800px",
    margin: "auto",
   
  },
};

export default UserRequests;
