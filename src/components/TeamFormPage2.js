import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Example icon URLs (replace these with your actual image URLs)
const roleIcons = {
  Batsman: 'https://images.vexels.com/media/users/3/316363/isolated/preview/02c4382e5d08daec77666410ddae3e6a-cricket-bat.png',
  Bowler: 'https://pngimg.com/uploads/cricket/cricket_PNG85.png', // Removed background from Bowler image
  AllRounder: 'https://png.pngtree.com/png-clipart/20221213/ourmid/pngtree-cricket-stamps-png-image_6521913.png'
};

const TeamFormPage2 = () => {
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
    player7: "",
    player8: "",
    player9: "",
    player10: "",
    player11: ""
  });

  const [roles, setRoles] = useState({
    player1Role: "",
    player2Role: "",
    player3Role: "",
    player4Role: "",
    player5Role: "",
    player6Role: "",
    player7Role: "",
    player8Role: "",
    player9Role: "",
    player10Role: "",
    player11Role: ""
  });

  const [selectedRole, setSelectedRole] = useState(null);
  const [bounceActive, setBounceActive] = useState(true); // Control the bouncing effect
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("teamFormData"));
    if (storedData) {
      setFormData((prev) => ({ ...prev, ...storedData }));
    } else {
      navigate("/register");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (index, role) => {
    setRoles({
      ...roles,
      [`player${index + 1}Role`]: role,
    });
    setSelectedRole(`player${index + 1}${role}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeFormData = JSON.parse(localStorage.getItem("teamFormData"));
    localStorage.setItem("teamFormData", JSON.stringify({ ...completeFormData, ...formData, roles }));

    setBounceActive(false); // Stop the bounce effect
    localStorage.removeItem("teamFormData");
    navigate("/success");
  };

  const bounceAnimation = {
    scale: [1, 1.1, 0.9, 1], // Keyframes for bounce effect
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center"style={{fontSize:"36px"}}>Add Players</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[...Array(11)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Player {index + 1}
                </label>
                <input
                  type="text"
                  name={`player${index + 1}`}
                  value={formData[`player${index + 1}`]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-6 py-2 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center ml-6">
                <label className="block text-lg font-medium text-gray-700 mr-2">Role:</label>
                <div className="flex">
                  {["Batsman", "Bowler", "AllRounder"].map((role) => (
                    <div key={role} className="mr-4 flex items-center">
                      <input
                        type="radio"
                        name={`role${index + 1}`}
                        value={role}
                        checked={roles[`player${index + 1}Role`] === role}
                        onChange={() => handleRoleChange(index, role)}
                      />
                      <motion.img
                        src={roleIcons[role]}
                        alt={`${role} Icon`}
                        className="w-8 h-8 ml-1"
                        animate={selectedRole === `player${index + 1}${role}` && bounceActive ? bounceAnimation : {}}
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="text-lg ml-1">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <motion.button
            type="submit"
            className="bg-[#1f5156] text-white px-20 py-4 rounded-md hover:bg-[#1f5156] hover:scale-105 transition duration-300 ease-in-out text-sm" // Changed button color and added animation
          
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
          >
            Submit
          </motion.button>
        </form><br/>
      </div>
    </motion.div>
  );
};

export default TeamFormPage2;
