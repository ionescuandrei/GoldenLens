import React from "react";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import GallerySection from "views/index-sections/GallerySection.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div style={{ background: "black" }}>
        <h1>GLS</h1>
      </div>
      <h1 style={{ textAlign: "center " }}>Wedding story</h1>
      <GallerySection />
      <DemoFooter />
    </>
  );
}

export default LandingPage;
