"use client";

import { useState } from "react";

const PreviewCv = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="px-8 xl:px-0 pb-8 flex justify-center pt-[25px] h-[100vh]">
      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <iframe
        src="/CV-Muhammad Akbar Ramadhan-v3.2.pdf"
        className={`transition-opacity duration-500 w-full h-full ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export default PreviewCv;
