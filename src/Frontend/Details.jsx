import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


//STYLING
const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    width: "400px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  cardContent: {
    textAlign: "left",
  },
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
//---COURSE'S FETCHING USING MOCkAPI
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://670ca56d7e5a228ec1d0e904.mockapi.io/Course/${courseId}`
        );
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

 

  return (
    <>
      <Navbar />
      <div className="all-title-box">
        <div className="container text-center">
          <h1>
            Course {course.title}, <span className="m_4">Details</span>
          </h1>
        </div>
      </div>

      <div id="overviews" className="section wb">
        <div className="container">
          <div className="section-title row text-center"></div>
          {/* <!-- end title --> */}

          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h2>The AptitudeNexus offers, </h2>
                <p>{course.descrption}</p>
              </div>
              {/* <!-- end messagebox --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src="https://media.istockphoto.com/id/1370433251/photo/black-woman-sitting-at-desk-using-computer-writing-in-notebook.jpg?s=612x612&w=0&k=20&c=rHpy3cX4LVFtzLI4gyy0T-fNYdTeAcdNQgTmy9maAIA=" // Replace with actual image URL
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>
              {/* <!-- end media --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src="https://t4.ftcdn.net/jpg/04/71/91/31/360_F_471913185_qDP9OqOlDvZxPY8Vr71PJthS371i7sZo.jpg" // Replace with actual image URL
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>
              {/* <!-- end media --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h2></h2>
                <p>
                  The {course.title} is a standardized assessment designed to
                  evaluate students' aptitude and skills for undergraduate
                  programs with given {course.criteria} criteria, with a total
                  of {course.total_marks} marks. The test consists of 10
                  multiple-choice questions (MCQs), each contributing to the
                  overall score. Candidates will be informed of the specific
                  test date, which they must adhere to when taking the
                  examination. A strong performance on this test is crucial for
                  gaining admission to various programs, as it significantly
                  influences the admission process and scholarship
                  opportunities.
                </p>

                <a href="#" className="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>
              {/* <!-- end messagebox --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      <br />

      <Footer />
    </>
  );
};

export default CourseDetails;
