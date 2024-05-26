import React from "react";

function Footer() {
  return (
    <footer className="h-10 bg-blue-500 text-center">
      <p>&copy; {new Date().getFullYear()} E-library</p>
    </footer>
  );
}

export default Footer;
