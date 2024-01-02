import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          Experienced Full Stack Developer with 2 years and 2 months of MERN stack expertise, specializing in designing, implementing robust web
          applications. Skilled in server-side development using Node.js and Express, proficient in MongoDB database management. Excels in creating
          RESTful APIs, integrating front-end and back-end components, and optimizing code efficiency. Adept at collaborating with cross-functional
          teams, conducting testing and debugging, and maintaining technical documentation. Strong in Git version control with excellent problem-
          solving and communication skills
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Name:</strong> Animesh Kumar
              </p>
              <p>
                <strong>Address:</strong> Near HP Petrol Pump, Vill Barhu Po Kokdoro Ps
                Pithoria, Barhu, PO: Kokdoro, DIST: Ranchi, Jharkhand - 834006
              </p>
              <p>
                <strong>Email:</strong> animesh.kumar7717@gmail.com
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Phone:</strong> +91 7004650899
              </p>
              <p>
                <strong>Main Language</strong> - Hindi
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
