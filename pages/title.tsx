import { NextPage } from 'next';

const Title: NextPage = () => {
  return (
    <div id="title" className="title-section parallax">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="title-backdrop">
            <h1 className="title title-color-font">Andre Burke</h1>
            <h2 className="sub-title title-color-font">Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
