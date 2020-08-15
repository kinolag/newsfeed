import React, { useState, useEffect } from "react";
import Selector from "./Editions";

function List() {
  /* we check for a positive response, otherwise if fetch fails we catch and log the error */
  async function newsFetcher() {
    try {
      /* open proxy, needed to prevent cors-related issue fetching from News API */
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const response = await fetch(proxy + url);
      if (response.status === 200) {
        const res = response.json();
        return res;
      }
    } catch (e) {
      console.log(e);
    }
  }

  /* set different value to change default edition */
  const [countryFilter, setCountryFilter] = useState("gb");

  const API_KEY = process.env.REACT_APP_NEWSAPI_KEY;

  /* country is one of several filters that can be used fetching News API */
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    `country=${countryFilter}&` +
    `apiKey=${API_KEY}`;

  const [news, updateNews] = useState([]);

  useEffect(() => {
    newsFetcher().then((response) => {
      if (response) {
        const articles = response.articles;
        updateNews(articles);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryFilter]);

  return (
    <section className="column-wrapper news-list pad-15">
      <Selector
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
      />

      {news.map((article) => {
        const domain = article.url.split("/")[2];
        const displayDomain = domain.startsWith("www.")
          ? domain.slice(4)
          : domain;
        const displayContent = article.content && article.content.split("[")[0];

        const readMessage =
          countryFilter === "fr"
            ? "Lire l'article sur "
            : countryFilter === "it"
            ? "Leggi l'articolo su "
            : countryFilter === "de"
            ? "Artikel lesen auf "
            : "Read article on ";

        return (
          <div key={article.url} className="column-wrapper news-item">
            <a
              className="a2"
              target="_blank"
              rel="noopener noreferrer"
              href={article.url}
              title="Full article"
            >
              <h3 className="news-headline text-serif mar-15">
                {article.title}
              </h3>
            </a>
            {article.urlToImage && (
              <span className="center-wrapper">
                <img
                  className="radius-8"
                  src={article.urlToImage}
                  alt={article.title}
                  style={{ width: "74%", height: "auto" }}
                />
              </span>
            )}
            <span className="news-body text-serif mar-15">
              {displayContent}
            </span>
            <a
              className="a1 is-main-red text-plain"
              style={{ margin: "5px 15px 15px 15px" }}
              target="_blank"
              rel="noopener noreferrer"
              href={article.url}
              title="Full article"
            >
              {readMessage}
              <span style={{ fontWeight: "bold" }}>{displayDomain}</span>
            </a>
          </div>
        );
      })}
      <div className="center-wrapper" style={{ width: "100%" }}>
        <button
          className="mar-20"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Back to top
        </button>
      </div>
    </section>
  );
}

export default List;
