import React from "react";

function LearnMore() {
  return (
    <>
      <div className="bg-bgPrimaryDark">
        <div className="section-sm pb-20 py-14">
          <h2 className="section-topic text-center">Want to Learn More?</h2>
          <p className="section-subtitle pt-10 mx-10 md:mx-auto">
            Read our whitepaper to know more details and mechanics of our
            project
          </p>
          <a
            href="https://docs.funkyland.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="section-btn">Read Whitepaper</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
