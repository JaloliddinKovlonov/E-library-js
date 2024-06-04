import React from "react";
import BookDetail from "../BookDetails";
import Nav from "../Header";
import Reviews from "../Reviews";

function BookDetailsPage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="relative z-10 w-full rounded-3xl bg-[#e5e8eb]">
        <Nav />
      </div>
      <main className="max-w-5xl mx-auto p-4">
        <BookDetail />
        <Reviews />
      </main>
    </div>
  );
}

export default BookDetailsPage;
