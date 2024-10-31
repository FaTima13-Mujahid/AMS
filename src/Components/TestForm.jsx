// import React, { useState } from "react";

// const TestForm = () => {
//   const [testId, setTestId] = useState("");
//   const [title, setTitle] = useState("");
//   const [totalMarks, setTotalMarks] = useState("");
//   const [description, setDescription] = useState("");
//   const [topicsToCover, setTopicsToCover] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTest = {
//       testId,
//       title,
//       totalMarks,
//       description,
//       topicsToCover: topicsToCover.split(",").map((topic) => topic.trim()),
//       date,
//     };
//     console.log("New Test:", newTest);
//     // Here you can add logic 
//   };

//   return (
//     <div className="container mt-18">
//       <div className="row justify-content-center">
//         <div className="col-md-12">
//           <h2>Add New Test</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Test ID</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={testId}
//                 onChange={(e) => setTestId(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Total Marks</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 value={totalMarks}
//                 onChange={(e) => setTotalMarks(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//                 rows="3" // Adjust the number of rows for height
//               ></textarea>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">
//                 Topics to Cover (comma separated)
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={topicsToCover}
//                 onChange={(e) => setTopicsToCover(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Date</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestForm;
