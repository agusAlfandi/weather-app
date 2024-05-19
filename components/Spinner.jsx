import React from "react";

const Spinner = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen z-10">
      <span className="relative loading loading-spinner loading-lg bg-slate-800"></span>
    </div>
  );
};

export default Spinner;
