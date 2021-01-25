import React from "react";

export default function Header() {
  return (
    <div className="center-wrapper bg-white" style={{ paddingTop: "4px" }}>
      <div
        className="multi-wrapper radius-4 text-plain"
        style={{ border: "0px solid #d30d1d", width: "98%" }}
      >
        <h3 className="is-main-red news-headline" style={{ margin: "0px 8px" }}>
          Simple NewsFeed
        </h3>
        <div
          style={{ alignItems: "center", margin: "2px 8px", fontSize: "16px" }}
        >
          A React app using News API
        </div>
      </div>
    </div>
  );
}
