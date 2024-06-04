// // BookDetails.jsx
// import React from 'react';

// const BookDetails = () => {
//   return (
//     <div className="book-details">
//       <div className="book-image">
//         {/* Replace with your book image */}
//         <img src="path-to-your-book-image.jpg" alt="Book" />
//       </div>
//       <div className="book-info">
//         <button className="start-reading-btn">Start Reading</button>
//         <h2>About this book</h2>
//         {/* Add book description here */}
//         <p>Book description...</p>
//         <h3>Author</h3>
//         {/* Add author name here */}
//         <p>Author's Name</p>
//         <h3>Reviews</h3>
//         {/* Add reviews here */}
//         <p>Review content...</p>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;




import React from 'react';

function BookDetails() {
  return (
    <section className="mt-8">
      <div className="relative w-full h-64 bg-gray-200">
        <img 
          src="https://via.placeholder.com/800x300" 
          alt="Book Cover" 
          className="object-cover w-full h-full"
        />
        <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded">
          Start Reading
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold">About this book</h2>
        <p className="mt-2 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Author</h3>
        <p className="mt-2 text-gray-700">Sun Tzu</p>
        <p className="text-gray-500">Lived: 544 BC - 496 BC</p>
      </div>
    </section>
  );
}

export default BookDetails;