import React, { FunctionComponent } from "react";

const Resume: FunctionComponent = () => {
  return (
    <div id="resume" className="resume-section global-padding">
      <div className="container text-center">
        <div className="row">
          <h2>Resume</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row global-margin justify-content-center">
          <object
            className="col-md-9"
            style={{ height: "90vh" }}
            type="application/pdf"
            data="/BurkeAndre.pdf"
            aria-label="resume pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
