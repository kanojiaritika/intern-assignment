import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";
function Instructor() {
  return (
    <div id="instructor">
      <h1>About the Instructor</h1>
      <div className="instcontent">
        <img src="./assets/ncd2.jpg" alt="ncd"></img>
        <p className="p1">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <p className="p2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
      </div>
      <div className="socialMedia">
        <div>
          <FontAwesomeIcon icon={faFacebook} className="fb" />
          Facebook
        </div>

        <div>
          <FontAwesomeIcon icon={faTwitter} className="fb" />
          Twitter
        </div>

        <div>
          <FontAwesomeIcon icon={faYoutube} className="fb" /> YouTube
        </div>

        <div>
          <FontAwesomeIcon icon={faInstagram} className="fb" />
          Instagram
        </div>
      </div>
    </div>
  );
}

export default Instructor;
