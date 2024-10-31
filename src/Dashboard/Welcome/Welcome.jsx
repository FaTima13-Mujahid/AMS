import React from "react";
import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Welcome;
