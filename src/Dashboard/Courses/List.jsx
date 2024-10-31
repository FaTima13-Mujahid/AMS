// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Modal from "react-modal"; // Importing the modal package
// import "bootstrap/dist/css/bootstrap.min.css"; // For Bootstrap styles

// const List = () => {
//   // Form State jo db sa relate ni
//   const [testId, setTestId] = useState("");
//   const [title, setTitle] = useState("");
//   const [totalMarks, setTotalMarks] = useState("");
//   const [description, setDescription] = useState("");
//   const [topicsToCover, setTopicsToCover] = useState("");
//   const [date, setDate] = useState("");

//   // Data State
//   const [data, setData] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal

//   // Fetch Data
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         //axios try catch behave
//         "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course"
//       );
//       setData(response.data);
//     } catch (error) {
//       toast.error("Error fetching data");
//     }
//   };

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newTest = {
//       title,
//       descrption: description,
//       tota_marks: totalMarks,
//       topics_cover: topicsToCover,
//       criteria:criteria,
//       date: date,
//       // date:  Date(date).getTime() / 1000), // Unix timestamp
//     };

//     try {
//       const response = await axios.post(
//         "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course",
//         newTest
//       );
//       setData([...data, response.data]);
//       toast.success("Data added successfully");
//     } catch (error) {
//       toast.error("Error adding data");
//     }

//     // Reset form
//     resetForm();
//   };

//   // Reset form function
//   const resetForm = () => {
//     setTestId("");
//     setTitle("");
//     setTotalMarks("");
//     setDescription("");
//     setTopicsToCover("");
//     setDate("");
//   };

//   // Handle Delete Data using id fetch
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(
//         `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${id}`
//       );
//       // setData(data.filter((item) => item.id !== id));
//       toast.success("Data deleted successfully");
//     } catch (error) {
//       toast.error("Error deleting data");
//     }
//   };

//   // Open Modal for Editing
//   const openModal = (item) => {
//     setTestId(item.id);
//     setTitle(item.title);
//     setTotalMarks(item.tota_marks);
//     setDescription(item.descrption);
//     setTopicsToCover(item.topics_cover);
//     setDate(item.date);
//     setModalIsOpen(true);
//   };

//   // Handle Update
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const updatedTest = {
//       title,
//       descrption: description,
//       tota_marks: totalMarks,
//       topics_cover: topicsToCover,
//       date: Math.floor(new Date(date).getTime() / 1000),
//     };

//     try {
//       await axios.put(
//         `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${testId}`,
//         updatedTest
//       );
//       setData(
//         data.map((item) =>
//           item.id === testId ? { ...item, ...updatedTest } : item
//         )
//       );
//       toast.success("Data updated successfully");
//       setModalIsOpen(false);
//     } catch (error) {
//       toast.error("Error updating data");
//     }

//     resetForm();
//   };

//   return (
//     <div className="container mt-5">
//       {/* Data Table Section */}
//       <h2 className="mt-5">Aptitude Course Data</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Total Marks</th>
//             <th>Topics Cover</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.title}</td>
//               <td>{item.descrption}</td>
//               <td>{item.tota_marks}</td>
//               <td>{item.topics_cover}</td>
//               <td>{new Date(item.date * 1000).toLocaleDateString()}</td>
//               <td>
//                 <span className="mx-2">
//                   <button
//                     className="btn btn-outline-success"
//                     onClick={() => openModal(item)}
//                   >
//                     <i className="fas fa-edit"></i>
//                     {/* Edit Icon */}
//                   </button>
//                 </span>
//                 <span className="mx-2">
//                   <button
//                     className="btn btn-outline-danger"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     <i className="fas fa-trash-alt"></i>
//                     {/* Delete Icon */}
//                   </button>
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Editing */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         ariaHideApp={false}
//         style={{
//           content: {
//             maxWidth: "500px", // Set max width for modal
//             margin: "auto", // Center the modal
//             padding: "20px", // Padding around content
//           },
//           overlay: {
//             backgroundColor: "rgba(0, 0, 0, 0.5)", // Background
//           },
//         }}
//       >
//         <h2>Edit Course</h2>
//         <form onSubmit={handleUpdate}>
//           <div className="mb-3">
//             <label className="form-label">Title</label>
//             <input
//               type="text"
//               className="form-control"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Total Marks</label>
//             <input
//               type="number"
//               className="form-control"
//               value={totalMarks}
//               onChange={(e) => setTotalMarks(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//               rows="2" // Reduced rows for smaller height
//             ></textarea>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">
//               Topics to Cover (comma separated)
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               value={topicsToCover}
//               onChange={(e) => setTopicsToCover(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Date</label>
//             <input
//               type="date"
//               className="form-control"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Update
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => setModalIsOpen(false)}
//           >
//             Cancel
//           </button>
//         </form>
//       </Modal>

//       <ToastContainer />
//     </div>
//   );
// };

// export default List;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal"; // Importing the modal package
import "bootstrap/dist/css/bootstrap.min.css"; // For Bootstrap styles

const List = () => {
  // Form State (not related to DB)
  const [testId, setTestId] = useState("");
  const [title, setTitle] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [description, setDescription] = useState("");
  const [topicsToCover, setTopicsToCover] = useState("");
  const [date, setDate] = useState("");
  const [criteria, setCriteria] = useState(""); // State for criteria

  // Data State
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal

  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course"
      );
      setData(response.data);
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTest = {
      title,
      descrption: description,
      tota_marks: totalMarks,
      topics_cover: topicsToCover,
      criteria: criteria, // Added criteria here
      // date: Math.floor(new Date(date).getTime() / 1000), // Convert date to Unix timestamp
      date:date,
    };

    try {
      const response = await axios.post(
        "https://670ca56d7e5a228ec1d0e904.mockapi.io/Course",
        newTest
      );
      setData([...data, response.data]);
      toast.success("Data added successfully");
    } catch (error) {
      toast.error("Error adding data");
    }

    // Reset form
    resetForm();
  };

  // Reset form function
  const resetForm = () => {
    setTestId("");
    setTitle("");
    setTotalMarks("");
    setDescription("");
    setTopicsToCover("");
    setDate("");
    setCriteria(""); // Reset criteria
  };

  // Handle Delete Data using id fetch
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${id}`
      );
      setData(data.filter((item) => item.id !== id));
      toast.success("Data deleted successfully");
    } catch (error) {
      toast.error("Error deleting data");
    }
  };

  // Open Modal for Editing
  const openModal = (item) => {
    setTestId(item.id);
    setTitle(item.title);
    setTotalMarks(item.tota_marks);
    setDescription(item.descrption);
    setTopicsToCover(item.topics_cover);
    setDate(new Date(item.date * 1000).toISOString().split("T")[0]); // Convert timestamp to date string
    setCriteria(item.criteria); // Set criteria in modal
    setModalIsOpen(true);
  };

  // Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTest = {
      title,
      descrption: description,
      tota_marks: totalMarks,
      topics_cover: topicsToCover,
      // date: Math.floor(new Date(date).getTime() / 1000), 
      date:date,// Convert date to Unix timestamp
      criteria: criteria, // Added criteria here
    };

    try {
      await axios.put(
        `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${testId}`,
        updatedTest
      );
      setData(
        data.map((item) =>
          item.id === testId ? { ...item, ...updatedTest } : item
        )
      );
      toast.success("Data updated successfully");
      setModalIsOpen(false);
    } catch (error) {
      toast.error("Error updating data");
    }

    resetForm();
  };

  return (
    <div className="container mt-5">
      {/* Data Table Section */}
      <h2 className="mt-5">Aptitude Course Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Total Marks</th>
            <th>Topics Cover</th>
            <th>Date</th>
            <th>Criteria</th> {/* Added Criteria Column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.descrption}</td>
              <td>{item.tota_marks}</td>
              <td>{item.topics_cover}</td>
              <td>{item.date }</td>{" "}
              {/* Format date here */}
              <td>{item.criteria}</td> {/* Displaying criteria */}
              <td>
                <span className="mx-2">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => openModal(item)}
                  >
                    <i className="fas fa-edit"></i>
                    {/* Edit Icon */}
                  </button>
                </span>
                <span className="mx-2">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                    {/* Delete Icon */}
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Editing */}
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
        <h2>Edit Course</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Total Marks</label>
            <input
              type="number"
              className="form-control"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="2" // Reduced rows for smaller height
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Topics to Cover (comma separated)
            </label>
            <input
              type="text"
              className="form-control"
              value={topicsToCover}
              onChange={(e) => setTopicsToCover(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Criteria</label>
            <input
              type="text"
              className="form-control"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)} // Added criteria input
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

export default List;
