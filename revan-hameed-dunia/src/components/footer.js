import React from "react";

import { RiGithubLine } from "react-icons/ri";
// this only create the footer nothing special
export default function footer() {
  return (
    <footer
      className="py-3 fixed-bottom"
      style={{
        backgroundColor: "#1e272e",
        color: "red",
        width: "100%",
        bottom: "0",
      }}
    >
      <div className="container d-flex justify-content-around">
        <a className="sty" href="https://github.com/Revan99" target="_blank">
          <RiGithubLine></RiGithubLine>
          Revan
        </a>

        <a className="sty" href="https://github.com/DuniaNasr" target="_blank">
          <RiGithubLine></RiGithubLine>
          Dunia
        </a>
        <a
          className="sty"
          href="https://github.com/hameedalnaser"
          target="_blank"
        >
          <RiGithubLine></RiGithubLine>
          Hameed
        </a>

        <a
          className="sty"
          href="https://github.com/randa9yahya
        "
          target="_blank"
        >
          <RiGithubLine></RiGithubLine>
          Randa
        </a>
      </div>
    </footer>
  );
}
