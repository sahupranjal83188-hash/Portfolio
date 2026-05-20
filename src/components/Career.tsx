import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Academic <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech(Data Science)</h4>
                <h5>Shri Ramswaroop Memorial College of Engineering & Management, AKTU</h5>
              </div>
              <h3>Pursuing</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology in Computer Science and Engineering with a specialization in Data Science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th (ISC)</h4>
                <h5>Modern Indian School</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Higher Secondary Education with a score of 92%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th (ICSE)</h4>
                <h5>Modern Indian School</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Secondary Education with a score of 94.3%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
