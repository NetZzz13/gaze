import React from "react";
import loading from "../../assets/loading.gif";

const Preloader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={loading} style={{ width: "100px" }} alt="preloader" />
    </div>
  );
};

export default Preloader;
