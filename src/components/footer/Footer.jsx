import React from "react";
import "./footer.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="copyright">
          <div>© 2023 Cinepedia. All rights reserved.</div>
          <div className="footer-links">
            <Link
              to="https://github.com/eslamalbaik/Movies-Cinepedia"
              target="blank"
            >
              <BsGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/eslam-albaik/" target="blank">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
