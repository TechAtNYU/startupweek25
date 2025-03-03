import React from "react";

const Speaker: React.FC = () => {
  return (
    <div className="relative bg-blue min-h-screen flex items-center justify-center">
      <div className="text-white space-y-8 text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
          BUILDATHON DAY 1
        </h1>
        <h2 className="text-4xl md:text-6xl font-mono font-bold text-[rgb(34,197,94)]">
          <span className="dot-text"><a href="https://nyu.qualtrics.com/jfe/form/SV_bl3QCihr1A978fs">[ FEEDBACK FORM ]</a></span>
        </h2>
        <p className="text-lg md:text-xl font-light leading-relaxed">
          
        </p>
        {/* <button className="bg-gray-300 text-black font-bold px-6 py-3 rounded-md hover:bg-gray-400 transition"
        onClick={() => window.location.href = "https://nyu.qualtrics.com/jfe/form/SV_bl3QCihr1A978fs"}>
          Feedback Form
        </button> */}
      </div>
    </div>
  );
};

export default Speaker;
