import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ProfilePage from "../ProfilePage";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <ProfilePage />
      </div>
    </>
  );
};

export default Profile;
