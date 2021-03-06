import { NextPage } from 'next';

const Resume: NextPage = () => {
  return (
    <div id="resume" className="resume-section global-padding">
      <div className="container text-center">
        <div className="row">
          <h2>Resume</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row global-margin justify-content-center">
          <embed
            className="col-md-9"
            style={{ height: '90vh' }}
            type="application/pdf"
            src="/BurkeAndre.pdf"
            aria-label="resume pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
