import React from "react";
import bookimg from "./assets/Sapiens.png";

function Card() {
  return (
    <div className="max-w-sm rounded border-black hover:shadow-lg hover:border-transparent cursor-pointer">
      <img className="w-full h-48 object-cover rounded" src={bookimg} alt="Sunset in the mountains"></img>
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">Sapiens</div>
        <p className="text-gray-700 ext-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
}

export default Card;
