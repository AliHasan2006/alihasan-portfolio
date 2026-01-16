import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gradient-to-br from-[#f84f39] via-[#ee9617] to-[#fecc1b]">
      {/* Container for Square */}
      <div className="relative flex items-center justify-center h-20 w-20">
        {/* Outer Square Border (Static) */}
        <div className="absolute inset-0 border-4 border-white/20 rounded-xl"></div>
        
        {/* Inner Pulsing Square (As per your image) */}
        <div className="h-10 w-10 bg-transparent border-4 border-white rounded-lg animate-pulse shadow-2xl shadow-orange-900/50"></div>
        
        {/* Ping Effect (Expanding ring) */}
        <div className="absolute h-12 w-12 border-2 border-white rounded-lg animate-ping"></div>
      </div>

      {/* Welcome Text */}
      <div className="mt-8">
        <h2 className="text-white font-light tracking-[0.5em] text-sm animate-pulse uppercase">
          Welcome
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
