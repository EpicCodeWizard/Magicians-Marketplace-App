import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import InterviewPage from "../InterviewPage";

const Interview = () => {
  return (
    // put them in fragments
    <>
      <Header />
      <div className="app__body">
        <Sidebar />

        <InterviewPage />
      </div>
    </>
  );
};

export default Interview;
