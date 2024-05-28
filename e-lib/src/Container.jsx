import React from 'react';
import SearchBar from './SearchBar';
import hero from './assets/hero.jpg';
import { ReactTyped } from 'react-typed';


function Container() {
  return (
    <div className="relative mx-10 md:mx-20 lg:mx-40 mt-24 text-center rounded h-[512px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="relative w-full lg:mx-24">
      <h2 className='font-bold font-noto-serif'>Search for
      <ReactTyped
      className='pl-1'
      strings={[
        "Books",
        "Authors",
        "Genres",
      ]}
      typeSpeed={120}
      backSpeed={140}
      loop></ReactTyped>
      </h2>
        <SearchBar width="w-full"/>
      </div>
    </div>
  );
}

export default Container;
