import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    localStorage.clear(); // Clear local storage
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Team Registered Successfully!</h1>
      <img
        className="object-cover object-center rounded-lg border border-gray-300 mx-auto mb-6"
        alt="Success Animation"
        src="https://media4.giphy.com/media/FeBamTuuPUTnFrqfx0/giphy.gif?cid=6c09b952djjkt4561ci63tffwnza5oomjujkkxuegg10cmyc&ep=v1_stickers_related&rid=giphy.gif&ct=s"
      />
      <button
        onClick={handleReturnHome}
        className="bg-[#1f5156] text-white px-20 py-4 rounded-md hover:bg-[#1f5156] hover:scale-105 transition duration-300 ease-in-out text-sm" // Changed button color and added animation
      >
        Return to Home
      </button>
    </div>
  );
};

export default Success;
