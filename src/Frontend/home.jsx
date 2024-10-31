import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//navbar import 
import Navbar from "../Components/Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "../Components/Registration";
import Login from "../Components/Login"
import Coursecard from "../Components/Coursecard"
import Footer from "../Components/Footer"
const Home = () => {


const navigate=useNavigate();
//----LOGOUT fUNCTION 
const logout = () =>{
  localStorage.removeItem("user");
  toast.success("you are Logout")
  navigate('/');
}

   
  return (
    <div class="host_version">
      <div
        class="modal fade"
        id="login"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header tit-up">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body customer-box">
              <ul class="nav nav-tabs">
                <li>
                  <a class="active" href="#Login" data-toggle="tab">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#Registration" data-toggle="tab">
                    Registration
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane active" id="Login">
                  {/* LOGIN */}
                  <Login />
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                  />
                </div>
                <div class="tab-pane" id="Registration">
                  {/* REGISTRATION */}
                  <Registration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <Navbar />
      <div
        id="carouselExampleControls"
        class="carousel slide bs-slider box-slider"
        data-ride="carousel"
        data-pause="hover"
        data-interval="false"
      >
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleControls"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleControls" data-slide-to="1"></li>
          <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div
              id="home"
              class="first-section"
              style={{ backgroundImage: "url('images/slider-03.jpg')" }}
            >
              <div class="dtab">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 text-right">
                      <div class="big-tagline">
                        <h2>
                          <strong>Aptitude</strong>Nexus
                        </h2>
                        <p class="lead">
                          "Choose, Click, Conquer – The Test Awaits!
                        </p>
                        <a href="#" class="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" class="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end row -->             */}
                </div>
                {/* <!-- end container --> */}
              </div>
            </div>
            {/* <!-- end section --> */}
          </div>
          <div class="carousel-item">
            <div
              id="home"
              class="first-section"
              style={{ backgroundImage: "url('images/slider-01.jpg')" }}
            >
              <div class="dtab">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 text-left">
                      <div class="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          <strong>Aptitude</strong>Nexus
                        </h2>
                        <p class="lead" data-animation="animated fadeInLeft">
                          With Landigoo responsive landing page template, you
                          can promote your all hosting, domain and email
                          services.{" "}
                        </p>
                        <a href="#" class="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" class="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end row -->             */}
                </div>
                {/* <!-- end container --> */}
              </div>
            </div>
            {/* <!-- end section --> */}
          </div>
          <div class="carousel-item">
            <div
              id="home"
              class="first-section"
              style={{ backgroundImage: "url('images/slider-02.jpg')" }}
            >
              <div class="dtab">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 text-center">
                      <div class="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          <strong>VPS Servers</strong> Company
                        </h2>
                        <p class="lead" data-animation="animated fadeInLeft">
                          1 IP included with each server Your Choice of any OS
                          (CentOS, Windows, Debian, Fedora) FREE Reboots
                        </p>
                        <a href="#" class="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" class="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end row -->             */}
                </div>
                {/* <!-- end container --> */}
              </div>
            </div>
            {/* <!-- end section --> */}
          </div>
          {/* <!-- Left Control --> */}
          <a
            class="new-effect carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="fa fa-angle-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          {/* <!-- Right Control --> */}
          <a
            class="new-effect carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="fa fa-angle-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div id="overviews" class="section wb">
        <div class="container">
          <div class="section-title row text-center">
            <div class="col-md-8 offset-md-2">
              <h3>About</h3>
              <p class="lead">
                AptitudeNexus is a platform designed to bridge the gap between
                learners and their potential. It provides users with a wide
                range of aptitude tests, such as ECAT, MCAT, and other
                competitive exams, helping them assess their skills and prepare
                for their future endeavors.
              </p>
            </div>
          </div>
          {/* <!-- end title --> */}

          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="message-box">
                <h4> BEST AptitudeNexus</h4>
                <h2>Welcome to AptitudeNexus</h2>
                <p>
                  AptitudeNexus fosters a supportive environment where learners
                  can easily access a variety of online tests tailored to
                  different fields and competencies. The platform also includes
                  resources such as study guides, tips, and practice questions,
                  ensuring users are well-prepared for their assessments. By
                  focusing on enhancing students' aptitude skills
                </p>

                <p>
                  {" "}
                  The platform also includes resources such as study guides,
                  tips By focusing on enhancing students'
                  aptitude skills, AptitudeNexus aims to help them achieve their
                  academic and career goals with confidence.
                </p>

                <a href="#" class="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>
              {/* <!-- end messagebox --> */}
            </div>
            {/* <!-- end col --> */}

            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="post-media wow fadeIn">
                <img
                  src="images/about_02.jpg"
                  alt=""
                  class="img-fluid img-rounded"
                />
              </div>
              {/* <!-- end media --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="post-media wow fadeIn">
                <img
                  src="images/about_03.jpg"
                  alt=""
                  class="img-fluid img-rounded"
                />
              </div>
              {/* <!-- end media --> */}
            </div>
            {/* <!-- end col --> */}

            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="message-box">
                <h2>ThesAptitudeNexus passage, used since the 2000s</h2>
                <p>
                  AptitudeNexus is a platform designed to bridge the gap between
                  learners and their potential. By offering comprehensive tests
                  and analytical tools, AptitudeNexus empowers students to
                  identify their strengths, improve their weaknesses, and stay
                  ahead in their academic and professional journeys. The name
                  “Nexus” signifies a connection, highlighting the platform's
                  role in linking users to opportunities through aptitude
                  assessments.
                </p>

                <p>
                  {" "}
                  The platform's role in linking users to opportunities through
                  aptitude assessments.
                </p>

                <a href="#" class="hover-btn-new orange">
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
      {/* <!-- end section --> */}

      <section class="section lb page-section">
        <div class="container">
          <div class="section-title row text-center">
            <div class="col-md-8 offset-md-2">
              <h3>Our Courses</h3>
             
            </div>
          </div>
          {/* <!-- end title --> */}

          <Coursecard />
          
        </div>
      </section>

      <div class="section cl">
        <div class="container">
          <div class="row text-left stat-wrap">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <span
                data-scroll
                class="global-radius icon_wrap effect-1 alignleft"
              >
                <i class="flaticon-study"></i>
              </span>
              <p class="stat_count">12000</p>
              <h3>Students</h3>
            </div>
            {/* <!-- end col --> */}

            <div class="col-md-4 col-sm-4 col-xs-12">
              <span
                data-scroll
                class="global-radius icon_wrap effect-1 alignleft"
              >
                <i class="flaticon-online"></i>
              </span>
              <p class="stat_count">240</p>
              <h3>Courses</h3>
            </div>
            {/* <!-- end col --> */}

            <div class="col-md-4 col-sm-4 col-xs-12">
              <span
                data-scroll
                class="global-radius icon_wrap effect-1 alignleft"
              >
                <i class="flaticon-years"></i>
              </span>
              <p class="stat_count">55</p>
              <h3>Years Completed</h3>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end section --> */}

      <div id="plan" class="section lb">
        <div class="container">
          <div class="section-title text-center">
            <h3>Choose Your Plan</h3>
            <p>
              Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          {/* <!-- end title --> */}

          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="message-box">
                <ul class="nav nav-pills nav-stacked" id="myTabs">
                  <li>
                    <a class="active" href="#tab1" data-toggle="pill">
                      Monthly Subscription
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="pill">
                      Yearly Subscription
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>

          <hr class="invis" />

          <div class="row">
            <div class="col-md-12">
              <div class="tab-content">
                <div class="tab-pane active fade show" id="tab1">
                  <div class="row text-center">
                    <div class="col-md-4">
                      <div class="pricing-table pricing-table-highlighted">
                        <div class="pricing-table-header grd1">
                          <h2>$45</h2>
                          <h3>per month</h3>
                        </div>
                        <div class="pricing-table-space"></div>
                        <div class="pricing-table-features">
                          <p>
                            <i class="fa fa-envelope-o"></i>{" "}
                            <strong>250</strong> Email Addresses
                          </p>
                          <p>
                            <i class="fa fa-rocket"></i> <strong>125GB</strong>{" "}
                            of Storage
                          </p>
                          <p>
                            <i class="fa fa-database"></i> <strong>140</strong>{" "}
                            Databases
                          </p>
                          <p>
                            <i class="fa fa-link"></i> <strong>60</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i class="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div class="pricing-table-sign-up">
                          <a href="#" class="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="pricing-table pricing-table-highlighted">
                        <div class="pricing-table-header grd1">
                          <h2>$59</h2>
                          <h3>per month</h3>
                        </div>
                        <div class="pricing-table-space"></div>
                        <div class="pricing-table-features">
                          <p>
                            <i class="fa fa-envelope-o"></i>{" "}
                            <strong>150</strong> Email Addresses
                          </p>
                          <p>
                            <i class="fa fa-rocket"></i> <strong>65GB</strong>{" "}
                            of Storage
                          </p>
                          <p>
                            <i class="fa fa-database"></i> <strong>60</strong>{" "}
                            Databases
                          </p>
                          <p>
                            <i class="fa fa-link"></i> <strong>30</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i class="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div class="pricing-table-sign-up">
                          <a href="#" class="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="pricing-table pricing-table-highlighted">
                        <div class="pricing-table-header grd1">
                          <h2>$85</h2>
                          <h3>per month</h3>
                        </div>
                        <div class="pricing-table-space"></div>
                        <div class="pricing-table-features">
                          <p>
                            <i class="fa fa-envelope-o"></i>{" "}
                            <strong>250</strong> Email Addresses
                          </p>
                          <p>
                            <i class="fa fa-rocket"></i> <strong>125GB</strong>{" "}
                            of Storage
                          </p>
                          <p>
                            <i class="fa fa-database"></i> <strong>140</strong>{" "}
                            Databases
                          </p>
                          <p>
                            <i class="fa fa-link"></i> <strong>60</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i class="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div class="pricing-table-sign-up">
                          <a href="#" class="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end row --> */}
                </div>
                {/* <!-- end pane --> */}

                <div class="tab-pane fade" id="tab2">
                  <div class="row text-center">
                    <div class="col-md-4">
                      <div class="pricing-table pricing-table-highlighted">
                        <div class="pricing-table-header grd1">
                          <h2>$477</h2>
                          <h3>Year</h3>
                        </div>
                        <div class="pricing-table-space"></div>
                        <div class="pricing-table-features">
                          <p>
                            <i class="fa fa-envelope-o"></i>{" "}
                            <strong>250</strong> Email Addresses
                          </p>
                          <p>
                            <i class="fa fa-rocket"></i> <strong>125GB</strong>{" "}
                            of Storage
                          </p>
                          <p>
                            <i class="fa fa-database"></i> <strong>140</strong>{" "}
                            Databases
                          </p>
                          <p>
                            <i class="fa fa-link"></i> <strong>60</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i class="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div class="pricing-table-sign-up">
                          <a href="#" class="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="pricing-table pricing-table-highlighted">
                        <div class="pricing-table-header grd1">
                          <h2>$485</h2>
                          <h3>Year</h3>
                        </div>
                        <div class="pricing-table-space"></div>
                        <div class="pricing-table-features">
                          <p>
                            <i class="fa fa-envelope-o"></i>{" "}
                            <strong>150</strong> Email Addresses
                          </p>
                          <p>
                            <i class="fa fa-rocket"></i> <strong>65GB</strong>{" "}
                            of Storage
                          </p>
                          <p>
                            <i class="fa fa-database"></i> <strong>60</strong>{" "}
                            Databases
                          </p>
                          <p>
                            <i class="fa fa-link"></i> <strong>30</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i class="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div class="pricing-table-sign-up">
                          <a href="#" class="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="pricing-table pricing-table-highlighted">
                        <div class="pricing-table-header grd1">
                          <h2>$500</h2>
                          <h3>Year</h3>
                        </div>
                        <div class="pricing-table-space"></div>
                        <div class="pricing-table-features">
                          <p>
                            <i class="fa fa-envelope-o"></i>{" "}
                            <strong>250</strong> Email Addresses
                          </p>
                          <p>
                            <i class="fa fa-rocket"></i> <strong>125GB</strong>{" "}
                            of Storage
                          </p>
                          <p>
                            <i class="fa fa-database"></i> <strong>140</strong>{" "}
                            Databases
                          </p>
                          <p>
                            <i class="fa fa-link"></i> <strong>60</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i class="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div class="pricing-table-sign-up">
                          <a href="#" class="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end pane --> */}
              </div>
              {/* <!-- end content --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end section --> */}

      <div
        id="testimonials"
        class="parallax section db parallax-off"
        style={{ backgroundImage: "url('images/parallax_04.jpg')" }}
      >
        <div class="container">
          <div class="section-title text-center">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          {/* <!-- end title --> */}

          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="testi-carousel owl-carousel owl-theme">
                <div class="testimonial clearfix">
                  <div class="testi-meta">
                    <img src="images/testi_01.png" alt="" class="img-fluid" />
                    <h4>James Fernando </h4>
                  </div>
                  <div class="desc">
                    <h3>
                      <i class="fa fa-quote-left"></i> Wonderful Support!
                    </h3>
                    <p class="lead">
                      They have got my project on time with the competition with
                      a sed highly skilled, and experienced & professional team.
                    </p>
                  </div>
                  {/* <!-- end testi-meta --> */}
                </div>
                {/* <!-- end testimonial --> */}

                <div class="testimonial clearfix">
                  <div class="testi-meta">
                    <img src="images/testi_02.png" alt="" class="img-fluid" />
                    <h4>Jacques Philips </h4>
                  </div>
                  <div class="desc">
                    <h3>
                      <i class="fa fa-quote-left"></i> Awesome Services!
                    </h3>
                    <p class="lead">
                      Explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you
                      completed.
                    </p>
                  </div>
                  {/* <!-- end testi-meta --> */}
                </div>
                {/* <!-- end testimonial --> */}

                <div class="testimonial clearfix">
                  <div class="testi-meta">
                    <img src="images/testi_03.png" alt="" class="img-fluid" />
                    <h4>Venanda Mercy </h4>
                  </div>
                  <div class="desc">
                    <h3>
                      <i class="fa fa-quote-left"></i> Great & Talented Team!
                    </h3>
                    <p class="lead">
                      The master-builder of human happines no one rejects,
                      dislikes avoids pleasure itself, because it is very pursue
                      pleasure.{" "}
                    </p>
                  </div>
                  {/* <!-- end testi-meta --> */}
                </div>
                {/* <!-- end testimonial --> */}
                <div class="testimonial clearfix">
                  <div class="testi-meta">
                    <img src="images/testi_01.png" alt="" class="img-fluid" />
                    <h4>James Fernando </h4>
                  </div>
                  <div class="desc">
                    <h3>
                      <i class="fa fa-quote-left"></i> Wonderful Support!
                    </h3>
                    <p class="lead">
                      They have got my project on time with the competition with
                      a sed highly skilled, and experienced & professional team.
                    </p>
                  </div>
                </div>

                <div class="testimonial clearfix">
                  <div class="testi-meta">
                    <img src="images/testi_02.png" alt="" class="img-fluid" />
                    <h4>Jacques Philips </h4>
                  </div>
                  <div class="desc">
                    <h3>
                      <i class="fa fa-quote-left"></i> Awesome Services!
                    </h3>
                    <p class="lead">
                      Explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you
                      completed.
                    </p>
                  </div>
                </div>

                <div class="testimonial clearfix">
                  <div class="testi-meta">
                    <img src="images/testi_03.png" alt="" class="img-fluid" />
                    <h4>Venanda Mercy </h4>
                  </div>
                  <div class="desc">
                    <h3>
                      <i class="fa fa-quote-left"></i> Great & Talented Team!
                    </h3>
                    <p class="lead">
                      The master-builder of human happines no one rejects,
                      dislikes avoids pleasure itself, because it is very pursue
                      pleasure.{" "}
                    </p>
                  </div>
                  {/* <!-- end testi-meta --> */}
                </div>
                {/* <!-- end testimonial --> */}
              </div>
              {/* <!-- end carousel --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end section --> */}

      <div class="parallax section dbcolor">
        <div class="container">
          <div class="row logos">
            <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
              <a href="#">
                <img src="images/logo_01.png" alt="" class="img-repsonsive" />
              </a>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
              <a href="#">
                <img src="images/logo_02.png" alt="" class="img-repsonsive" />
              </a>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
              <a href="#">
                <img src="images/logo_03.png" alt="" class="img-repsonsive" />
              </a>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
              <a href="#">
                <img src="images/logo_04.png" alt="" class="img-repsonsive" />
              </a>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
              <a href="#">
                <img src="images/logo_05.png" alt="" class="img-repsonsive" />
              </a>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
              <a href="#">
                <img src="images/logo_06.png" alt="" class="img-repsonsive" />
              </a>
            </div>
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end section --> */}
<Footer/>
    </div>
  );
};

export default Home;