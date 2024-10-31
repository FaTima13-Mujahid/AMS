import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Frontend/home";
import Courses from "./Dashboard/Courses/Courses";
import Test from "./Dashboard/Courses/Test";
import All from "./Dashboard/All";
import List from "./Dashboard/Courses/List";
import Welcome from "./Dashboard/Welcome/Welcome";
import Dashboard from "./Dashboard/Welcome/Dashboard";

//courses offer
import CoursesList from "./Frontend/CoursesList"
//mcqs
import Mcqs from "./Dashboard/Mcqs/Mcqs";
import Insert from "./Dashboard/Mcqs/Insert";
import Data from "./Dashboard/Mcqs/Data";

//users tab
import Request from "./Dashboard/Users/Request"
import Users from "./Dashboard/Users/Users"
import Accounts from "./Dashboard/Users/Accounts";
import Profile from "./Frontend/Profile"
import Quiz from "./Frontend/Quiz"
import UserRequests from "./Frontend/UserRequests";
import CourseDetails from "./Frontend/Details";

// import Quiz from "./Frontend/Quiz";
// import { DataContext } from "./Frontend/DataContext";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ----------------FRONTEND SIDE PAGE---------- */}

        <Route path="/" element={<Home />} />
        <Route path="CoursesList" element={<CoursesList />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/Quiz/:id" element={<Quiz />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />

        <Route path="UserRequests" element={<UserRequests />} />

        <Route path="/All" element={<All />}>
          {/* Admin Dashboard setup */}
          {/* ----------------ADMIN SIDE PAGE---------- */}

          <Route path="Welcome" element={<Welcome />} />
          <Route path="Dashboard" element={<Dashboard />} />

          {/* courses setup */}
          <Route path="Courses" element={<Courses />} />
          <Route path="Test" element={<Test />} />
          <Route path="List" element={<List />} />

          {/* -------- */}

          {/* mcqs setup */}
          <Route path="Mcqs" element={<Mcqs />} />
          <Route path="Insert" element={<Insert />} />
          <Route path="Data" element={<Data />} />

          {/* -------- */}

          {/* users list */}
          <Route path="Users" element={<Users />} />
          <Route path="Accounts" element={<Accounts />} />
          <Route path="Request" element={<Request />} />
          {/* -------- */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
