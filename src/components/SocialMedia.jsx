import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://twitter.com/Dibyansu9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/dibyansu-mishra/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  </div>
);

export default SocialMedia;
