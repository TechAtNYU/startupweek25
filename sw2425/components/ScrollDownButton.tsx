import React from "react";

const ScrollDownButton: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="font-bold bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
    >
      See Upcoming Events
    </button>
  );
};

export default ScrollDownButton;
