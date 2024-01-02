import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <p className="teal year_exp white-text">
            Aug
            <strong> 2021</strong> - Sep
            <strong> 2023</strong>
          </p>
          <p>
            As a versatile Full Stack Developer, I've successfully contributed to
            diverse projects, showcasing adaptability and proficiency in various
            roles:
          </p>
          <h6>
            <strong>PROJECTS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Plan Manager</strong>
                </h6>
                <p className="teal year_exp white-text">
                  Jan
                  <strong> 2022</strong> - Mar
                  <strong> 2022</strong>
                </p>
                <ul>
                <li>Development efforts for both Back-End (Node.js, TypeScript) and Front-End (React.js, JavaScript).</li>
                <li>Utilized third-party tools such as Swagger, Happy, Joi, Express, JWT, Axios, etc.</li>
                <li>Implemented Material UI for enhanced user interfaces.</li>
                <li>Leveraged GraphQL for efficient mutation, subscription, and query operations.</li>
                </ul>
              </blockquote>
              {/* Repeat the same structure for other projects */}
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>PMS</strong>
                </h6>
                <p className="teal year_exp white-text">
                  Apr
                  <strong> 2022</strong> - Jun
                  <strong> 2022</strong>
                </p>
                <ul>
                    <li>Built robust backends using Node.js and TypeScript, fetching and displaying user data in the UI.</li>
                    <li>Continuously improved and peer-reviewed code to ensure quality.</li>
                    <li>Developed RESTful APIs and successfully executed multiple proof-of-concepts (POCs).</li>
                </ul>
              </blockquote>
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Saal-Horse-Race-Platform.</strong>
                </h6>
                <p className="teal year_exp white-text">
                  Jul
                  <strong> 2022</strong> - Sep
                  <strong> 2022</strong>
                </p>
                <ul>
                <li>Developed efficient software applications, emphasizing clean code practices.</li>
                <li>Maintained and enhanced code bases through rigorous peer code reviews.</li>
                <li>Optimized applications for maximum speed and scalability.</li>
                <li>Designed and implemented RESTful APIs.</li>
                <li>Integrated Back-End seamlessly with Keycloak for enhanced security.</li>
                </ul>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
