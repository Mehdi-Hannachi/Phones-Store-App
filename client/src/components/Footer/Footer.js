import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w3-container w3-padding-32 w3-light-grey w3-center w3-xlarge">
        <div className="w3-section">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p className="w3-medium">
          Powered by{" "}
          <a href="test" className="w3-hover-text-green">
            Hannachi Mehdi
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
