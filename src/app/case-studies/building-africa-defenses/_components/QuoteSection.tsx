'use client';

import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-[linear-gradient(110deg,_#1E2859,_#1D5539)] w-full h-[60vh] relative flex flex-col items-center justify-center">
      {/* First Div: Contains a paragraph with text */}
      <div className="w-[70%] mb-4">
        <p className="text-white">
          This is the quote text that appears in the first div.
        </p>
      </div>
      
      {/* Second Div: Contains a paragraph absolutely positioned to the left */}
      <div className="w-[70%] relative">
        <p className="absolute left-0 text-white text-left p-with-pseudo">
          This text is in the second div.
        </p>
      </div>
      
      {/* Scoped CSS for pseudo elements */}
      <style jsx>{`
        .p-with-pseudo::before {
          content: "";
          display: inline-block;
          width: 50px;
          height: 1px;
          background: white;
          margin-right: 10px;
          vertical-align: middle;
        }
        .p-with-pseudo::after {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          vertical-align: middle;
          margin-left: 10px;
        }
      `}</style>
    </section>
  );
};

export default QuoteSection;
