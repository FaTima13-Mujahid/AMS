import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Accounts = () => {
  const [registrations, setRegistrations] = useState([]);
//FETCHING REGISTRATION INFORMATION
  useEffect(() => {
    // Fetch data from the API
    fetch("https://670388cebd7c8c1ccd41d20e.mockapi.io/Registration")
      .then((response) => response.json())
      .then((data) => setRegistrations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Data</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>NIC</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td>{registration.fname}</td>
              <td>{registration.lname}</td>
              <td>
                {registration.dob }
              </td>{" "}
              {/* Convert timestamp to date */}
              <td>{registration.nic}</td>
              <td>{registration.email}</td>
              <td>{registration.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
