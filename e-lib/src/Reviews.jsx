import React from 'react';

const reviews = [
  {
    name: 'Ming Lee',
    date: 'May 23, 2023',
    review: 'This is one of the best books I have ever read...',
    avatar: 'https://via.placeholder.com/48',
    rating: 5,
  },
  {
    name: 'Michael Johnson',
    date: 'April 29, 2023',
    review: 'I read this book for a class on military history...',
    avatar: 'https://via.placeholder.com/48',
    rating: 5,
  },
  {
    name: 'Sophia Wang',
    date: 'March 15, 2023',
    review: 'I found this book to be very interesting...',
    avatar: 'https://via.placeholder.com/48',
    rating: 5,
  },
  {
    name: 'Carlos Hernandez',
    date: 'February 9, 2023',
    review: 'This is a classic work on military strategy...',
    avatar: 'https://via.placeholder.com/48',
    rating: 5,
  },
  {
    name: 'Julia Smith',
    date: 'January 4, 2023',
    review: 'I enjoyed reading this book...',
    avatar: 'https://via.placeholder.com/48',
    rating: 5,
  },
];

function Reviews() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold">Reviews</h2>
      <div className="mt-6 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.236 2.36 9.764 2 10.382 2s1.146.36 1.333.927l1.566 4.814a1 1 0 00.95.691h5.073a1 1 0 01.592 1.808l-4.106 3.036a1 1 0 00-.364 1.118l1.566 4.814a1 1 0 01-1.539 1.118l-4.106-3.036a1 1 0 00-1.178 0l-4.106 3.036a1 1 0 01-1.539-1.118l1.566-4.814a1 1 0 00-.364-1.118L2.907 9.64a1 1 0 01.592-1.808h5.073a1 1 0 00.95-.691L9.049 2.927z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-gray-700">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;