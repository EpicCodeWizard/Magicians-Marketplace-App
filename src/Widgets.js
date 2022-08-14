import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://en.wikipedia.org/wiki/List_of_magic_tricks"
        width="380"
        height="700"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="yes"
        frameborder="0"
        allowTransparency="true"
      ></iframe>
    </div>
  );
}

export default Widgets;
