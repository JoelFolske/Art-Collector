import React from "react";
import Loading from "./components";

// Create and export a component called Loading which uses this static HTML template:

export default function isLoading({}) {
  return (
    <div id="loading">
      <h2 className="message">Searching...</h2>*{" "}
    </div>
  );
}
