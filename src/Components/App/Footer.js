import React from "react";
import sayKarenLogo from "./../Assets/sayKaren_Black.png";
import code from "./../Assets/code.png";

const Footer = () => (
  <footer id="footer" className="footerDetails">
    Website created by:
    <a href="http://saykaren.com" target="_blank" rel="noopener noreferrer">
      <img
        src={sayKarenLogo}
        className="footerDetails"
        id="sayKarenLogo"
        alt="sayKaren.com"
      />
    </a>
    <a
      href="https://github.com/saykaren/BreakingBad"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={code} className="footerDetails" id="codeIcon" alt="code" />
    </a>
  </footer>
);

export default Footer;
