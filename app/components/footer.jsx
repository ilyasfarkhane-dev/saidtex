import React from "react";

const Footer = () => {
  return (
    <footer className="text-center pos-re">
      <div className="container mx-auto">
        <a className="logo" href="#">
          <img src="/images/saidtexlogo.png" alt="logo" />
        </a>

        <p>
          &copy; SAIDTEX © 2024 by{" "}
          <a className="hover:text-blue-500" href="https://feizhoucom.com">
            FeizhouCom
          </a>
        </p>
      </div>

      <div className="curve curve-top curve-center"></div>
    </footer>
  );
};

export default Footer;
