import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="w3-container w3-padding-32 w3-light-grey w3-center w3-xlarge">
        <div class="w3-section">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p class="w3-medium">
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            class="w3-hover-text-green"
          >
            Hannachi Mehdi
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;