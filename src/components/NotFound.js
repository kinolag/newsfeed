import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="column-wrapper news-list pad-15" style={{height: "100%"}}>
      <h3 className="is-almost-black pad-20">The page does not exist.</h3>
      <NavLink className="a1 pad-20" to="/" title="Home">
        Back to home page
      </NavLink>
    </section>
  );
}
