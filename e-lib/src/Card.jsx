import React from "react";
import { Link } from "react-router-dom"; // Import Link
import bookimg from "./assets/Sapiens.png";

function Card() {
  // Assuming you will pass a bookId prop to each Card
  const bookId = "sapiens"; // This should be a unique identifier for each book

  return (
    <Link to={`/book/${bookId}`} className="no-underline"> {/* Wrap the card content with Link */}
      <div className="max-w-sm rounded border-black hover:shadow-lg hover:border-transparent cursor-pointer">
        <img className="w-full h-48 object-cover rounded" src={bookimg} alt="Sunset in the mountains"></img>
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">Sapiens</div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
