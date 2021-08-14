import React from "react";
import style from "@/styles/sass/SearchResultTitle.module.scss";

export default ({ searchTerm }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <h3 className={style.searchResultTitle}>
        Displaying results for: "{searchTerm}"
      </h3>
    </div>
  );
};
