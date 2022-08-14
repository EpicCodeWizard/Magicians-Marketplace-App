import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import CompetitionPage from "../CompetitionPage";

const Competition = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <CompetitionPage />
      </div>
    </>
  );
};

export default Competition;
