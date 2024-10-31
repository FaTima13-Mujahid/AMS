import React, { useEffect, useState } from "react";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
          "https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRequests();
  }, []);

  const updateRequestStatus = async (id, status, courseDate) => {
    const courseDateObj = new Date(courseDate * 1000); // Convert from UNIX timestamp (seconds me represent  )
    const today = new Date();

    if (status === "Approved" && courseDateObj < today) {
      alert(
        "You cannot approve this request because the course date has passed."
      );
      return;
    }

    if (!window.confirm(`Are you sure you want to ${status} this request?`)) {
      return;
    }

    try {
      const response = await fetch(
        `https://670388cebd7c8c1ccd41d20e.mockapi.io/UserTest/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update request status");
      }

      const updatedRequests = requests.map((request) =>
        request.id === id ? { ...request, status } : request
      );
      setRequests(updatedRequests);

      alert(`Request has been ${status}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>User Name</th>
              <th>Course Title</th>
              <th>Percentage</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.userName}</td>
                <td>{request.courseTitle}</td>
                <td>{request.percentage}</td>
                <td>{request.status}</td>

                <td>
                  {request.status === "pending" && (
                    <>
                      <button
                        className="btn btn-success btn-sm mr-1"
                        onClick={() =>
                          updateRequestStatus(
                            request.id,
                            "Approved",
                            request.date
                          )
                        }
                      >
                        Approve
                      </button>

                      <button
                        className="btn btn-danger btn-sm mr-1"
                        onClick={() =>
                          updateRequestStatus(
                            request.id,
                            "Rejected",
                            request.date
                          )
                        }
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
