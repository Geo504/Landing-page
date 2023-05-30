import React from "react";

export const Footer = ({ text }) => {
  return (
    <footer className="container-fluid p-3 bg-dark text-center text-light">
      {text}
    </footer>
  );
};
