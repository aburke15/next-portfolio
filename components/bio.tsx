import React, { FunctionComponent } from "react";
import src from "../public/images/loading.gif";
import Image from "next/image";

const Bio: FunctionComponent = () => {
  return (
    <div id="about" className="bio-section global-padding">
      <div className="container text-center">
        <div className="row">
          <h2>About Me</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row global-margin">
          <Image
            className="img-responsive bio-pic"
            src={src}
            alt={"this is Andre Burke"}
          />
        </div>
        <div className="row justify-content-center">
          <p className="col-md-8">
            I am a die hard tech enthusiast with a passion for learning. I have
            worked in the tech industry for over 5 years and have a solid
            background in software development. Although I have experience in
            both front and back end development, I am currently specialized in
            back end development. My goal is to build top quality software that
            is easy to use and easy to maintain. I hope to accomplish this by
            keeping up with tested architecture/development practices and the
            latest technologies. Please visit my links below to see my work and
            social profiles. I would love to connect with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
