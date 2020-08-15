import React from "react";
import slogo from "../assets/s_logo_1200.png";

export default function Header() {
  return (
    <div
      className="center-wrapper bg-white"
      style={{ paddingTop: "4px" }}
    >
      <div
        className="multi-wrapper radius-4 text-plain"
        style={{ border: "0px solid #d30d1d", width: "98%" }}
      >
        <div style={{margin: "0px 12px"}}>
          <h3 className="is-main-red news-headline">
            Simple NewsFeed
          </h3>
        </div>
        <div
          className="row-wrapper is-almost-black"
          style={{ alignItems: "center", margin: "0px 12px"}}
        >
          <span className="is-grey" style={{ fontSize: "16px" }}>
            A React app for
          </span>
          <div>
            <img
              style={{ height: "25px", width: "auto", padding: "0px 0px 4px 6px" }}
              src={slogo}
              alt="Logo"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
