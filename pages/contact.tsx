import React, { FunctionComponent } from "react";
import linkedIn from "../public/images/linkedin.png";
import github from "../public/images/github.png";
import youtube from "../public/images/youtube.png";
import Image from "next/image";

const Contact: FunctionComponent = () => {
  return (
    <div id="contact" className="contact-section global-padding">
      <div className="container text-center">
        <div className="row contact-margin contact-top-row">
          <h5>
            <a
              className="contact-email"
              href="mailto:aburke.dev@gmail.com"
              rel="noopener"
              target="_top"
            >
              <i className="bi bi-envelope"></i> aburke.dev@gmail.com
            </a>
          </h5>
          <h5 className="contact-phone">
            <i className="bi bi-phone"></i> 801-708-2782
          </h5>
        </div>
        <div>
          <a
            className="contact-icon-space"
            href="https://www.linkedin.com/in/aburke15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedIn} alt="LinkedIn logo" height={50} width={50} />
          </a>
          <a
            className="contact-icon-space"
            href="https://github.com/aburke15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="GitHub logo" height={50} width={50} />
          </a>
          <a
            className="contact-icon-space"
            href="https://www.youtube.com/channel/UCczcmJfcsvhmW-65r1RuZ4w/featured?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtube} alt="YouTube logo" height={50} width={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
