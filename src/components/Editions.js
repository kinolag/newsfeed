import React from "react";

/** encapsulated helper component to prevent code repetition in 2nd row.
 * className applied conditionally on selection
 * */
const Button = ({ country, countryFilter, setCountryFilter }) => {
  /* NB: there may be other speial cases like "gb" if adding more countries to the array of available options, always check on addition. */
  const countryDisplay = (country === "gb" ? "uk" : country).toUpperCase();
  return (
    <button
      className={countryFilter === country ? "selected-button" : null}
      onClick={() => setCountryFilter(country)}
    >
      {countryDisplay}
    </button>
  );
};

export default function Selector({ countryFilter, setCountryFilter }) {
  /* this is one of several filters that can be used fetching News API */
  const editions = ["gb", "us", "au", "fr", "it", "de", "nz"];
  return (
    <section
      className="center-wrapper radius-8"
      style={{ border: "0px solid red", width: "100%", background: "rgba(240, 240, 240, 0.44)", }}
    >
      <div
        className="row-wrapper mar-b-12 text-plain"
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          country={editions[0]}
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
        />
        <p className="is-blue" style={{ fontWeight: "bold" }}>
          EDITIONS
        </p>
        <Button
          country={editions[1]}
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
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
        {/* not all elemenyts are mapped here for layout reasons (0 and 1 are in row above) */}
        {editions.slice(2).map((edition) => (
          <Button
            key={edition}
            country={edition}
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
          />
        ))}
      </div>
    </section>
  );
}
