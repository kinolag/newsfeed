import React from "react";

/** encapsulated helper component to prevent code repetition in rows.
 * filter may vary.
 * className applied conditionally on selection.
 * */
const Button = ({ currentValue, filter, setFilter }) => {
  /* NB: there may be other special cases like "gb", always check on addition */
  const valueDisplay = (currentValue === "gb"
    ? "uk"
    : currentValue === "technology"
    ? "tech"
    : currentValue
  ).toUpperCase();
  return (
    <button
      className={filter === currentValue ? "selected-button" : null}
      onClick={() => setFilter(currentValue)}
    >
      {valueDisplay}
    </button>
  );
};

export default function Selector({
  countryFilter,
  setCountryFilter,
  categoryFilter,
  setCategoryFilter,
}) {
  /* these are two several filters that can be used fetching News API */
  const editions = ["gb", "us", "au", "fr", "it", "de", "nz"];
  const categories = ["general", "technology", "science"];
  return (
    <section
      className="center-wrapper radius-8"
      style={{
        border: "0px solid red",
        width: "100%",
        background: "rgba(240, 240, 240, 0.4)",
      }}
    >
      <div
        className="row-wrapper mar-b-12"
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* we set default category in local state as "general" (all news) */}
        {categories.map((category) => (
          <Button
            key={category}
            currentValue={category}
            filter={categoryFilter}
            setFilter={setCategoryFilter}
          />
        ))}
      </div>
      <div
        className="row-wrapper mar-b-12 text-plain"
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          currentValue={editions[0]}
          filter={countryFilter}
          setFilter={setCountryFilter}
        />
        <p className="is-blue" style={{ fontWeight: "bold", opacity: 0.9 }}>
          SELECT
        </p>
        <Button
          currentValue={editions[1]}
          filter={countryFilter}
          setFilter={setCountryFilter}
        />
      </div>
      <div
        className="row-wrapper mar-b-12"
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* not all array elements are mapped here for layout reasons (0 and 1 are part of previous row) */}
        {editions.slice(2).map((edition) => (
          <Button
            key={edition}
            currentValue={edition}
            filter={countryFilter}
            setFilter={setCountryFilter}
          />
        ))}
      </div>
    </section>
  );
}
