import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <Link to="#">About</Link>
          <Link to="#">Press</Link>
          <Link to="#">Copyright</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">Creators</Link>
          <Link to="#">Advertise</Link>
          <Link to="#">Developers</Link>
        </div>

        <div className="footer__bottom">
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Policy & Safety</Link>
          <Link to="#">How Youtube Works</Link>
        </div>

        <div className="copyright">
          <p>&copy; 2020 Google LLC</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
