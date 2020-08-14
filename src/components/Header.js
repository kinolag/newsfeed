import React from "react";
import slogo from "../assets/s_logo_1200.png";

export default function Header() {
  return (
    <div
      className="center-wrapper bg-white"
      style={{ padding: "4px 0px 0px 0px" }}
    >
      <div
        className="multi-wrapper radius-4 text-plain"
        style={{ border: "1px solid #d30d1d", width: "98%" }}
      >
        <h3 className="is-main-red news-headline">
          &nbsp;Simple NewsFeed&nbsp;
        </h3>
        <div
          className="row-wrapper is-almost-black mar-b-12"
          style={{ alignItems: "flex-end" }}
        >
          <span className="is-grey" style={{ fontSize: "16px" }}>
            &nbsp;A React app for
          </span>
          <img
            style={{ height: "25px", width: "auto", padding: "3px 7px" }}
            src={slogo}
            alt="Logo"
          />
          &nbsp;
        </div>
      </div>
    </div>
  );
}
