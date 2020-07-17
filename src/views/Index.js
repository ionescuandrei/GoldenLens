import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

import SectionDark from "views/index-sections/SectionDark.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import Aboutus from "views/index-sections/Aboutus.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <Aboutus />
        <SectionDark />
        <SectionExamples />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
