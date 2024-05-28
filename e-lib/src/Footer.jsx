import React from "react";

function Footer() {
  return (
    <footer className="h-10 py-1 bg-black text-center text-white">
      <p>&copy; {new Date().getFullYear()} E-library</p>
    </footer>
  );
}

export default Footer;
