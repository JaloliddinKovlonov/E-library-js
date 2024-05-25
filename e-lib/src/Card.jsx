import React from "react";
import bookimg from "./assets/Sapiens.png";

function Card() {
  return (
    <div className="card text-center" style={{ width: "182px", height: "254px" }}>
      <img src={bookimg} className="card-img-top" alt="..." style={{ width: "182px", height: "182px" }}></img>
      <div className="card-body">
        <p className="card-text" style={{fontSize: "14px"}}>
          Some quick example text.
        </p>
      </div>
    </div>
  );
}

export default Card;
