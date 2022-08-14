import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import JobofferPage from "../JobofferPage";

const JobOffer = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <JobofferPage />
      </div>
    </>
  );
};

export default JobOffer;
