import React from "react";
// import { NavLink } from "react-router-dom";
import { NewsArray } from "./NewsArray";

export default function List() {
  return (
    <section className="column-wrapper">
      {NewsArray.map((item) => (
        <div keay={item.id} className="column-wrapper">
          <h3 className="headline pad-5">{item.headline}</h3>
          <span className="news-body pad-5">{item.body}</span>
        </div>
      ))}
    </section>
  );
}
