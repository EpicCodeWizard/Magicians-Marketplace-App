import { createGenerateClassName } from "@material-ui/core";
import React from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const ProfilePage = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center">
          <button class="btn btn-secondary">
            <img src={user.photoURL} height="100" width="100" />
          </button>
          <span class="name mt-3">{user.displayName}</span>{" "}
          <span class="idd">@{user.displayName}</span>
          <div class="d-flex flex-row justify-content-center align-items-center gap-2">
            <span class="idd1">Oxc4c16a645_b21a</span>{" "}
            <span>
              <i class="fa fa-copy"></i>
            </span>
          </div>
          <div class="d-flex flex-row justify-content-center align-items-center mt-3">
            <span class="number">
              0 <span class="follow">Followers</span>
            </span>
          </div>
          <div class=" d-flex mt-2">
            <Link to="/">
              <button class="btn1 btn-dark">Create Post!</button>
            </Link>
          </div>
          <div class="text mt-3">
            <span>{user.displayName} is a creator </span>
          </div>
          <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span>
              <i class="fa fa-twitter"></i>
            </span>{" "}
            <span>
              <i class="fa fa-facebook-f"></i>
            </span>{" "}
            <span>
              <i class="fa fa-instagram"></i>
            </span>{" "}
            <span>
              <i class="fa fa-linkedin"></i>
            </span>
          </div>{" "}
          <div class=" px-2 rounded mt-4 date ">
            <span class="join">Just Joined</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
