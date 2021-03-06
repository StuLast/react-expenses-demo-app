import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const AboutPage = () => (
  <div>
    <Header />
    <div className="container">
      <h1>About The Expensologist Project</h1>
      <h2>The Project</h2>
      <p>
        The Expensologist project is essentially a demo of what is possible with
        React.js, Google Firebase and a handful of additional npm modules.
      </p>
      <h2>Limitations</h2>
      <p>
        Whilst we have made this project available to experiment with, the
        database, database structure and codebase are subject to change without
        notice. This site is intended only to demonstrate React.js code. It is
        not intended as a finalized fully functional web application.
      </p>
      <h2>Copyright</h2>
      <p>
        The code contained in the publicly visible repo, and on the website is
        subject to varying levels of copyright. For Node modules, the licensing
        is available by checking the code base of each Node module. The overall
        design, functionality and source code contained within the /src folder,
        as well as the built code on on the web application remains the
        copyright of Stu Last and Spyced Concepts with all rights reserved.
      </p>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
