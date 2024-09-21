import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

const FeaturedTeams = () => {
  const teams = [
    {
      name: "Team A",
      description: "Description for Team A",
      logo: "https://www.shutterstock.com/image-illustration/cricket-match-league-tournament-championship-600nw-2061573014.jpg",
      points: 120,
    },
    {
      name: "Team B",
      description: "Description for Team B",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/018/917/054/small/cricket-sport-player-logo-template-design-free-vector.jpg",
      points: 95,
    },
    {
      name: "Team C",
      description: "Description for Team C",
      logo: "https://t4.ftcdn.net/jpg/04/26/13/71/360_F_426137121_u2zwsANOFCMcAZyAKAA9jJu1GCWxWaLG.jpg",
      points: 88,
    },
    {
      name: "Team D",
      description: "Description for Team D",
      logo: "https://as2.ftcdn.net/v2/jpg/05/54/51/71/1000_F_554517180_LQapbEspeTLrh5pWCw7O5MM0wgSNYmGz.jpg",
      points: 110,
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-12">
      <h2 className="font-semibold text-center text-[#1f5156] mb-6 text-3xl">
        Featured Teams
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {teams.map((team) => (
          <CardContainer
            key={team.name}
            className="inter-var w-full max-w-sm sm:max-w-md lg:max-w-md" // Increased card width
          >
            <CardBody
              className="bg-[#1f5156] relative group/card text-white w-full h-auto rounded-lg p-6 border transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold"
              >
                {team.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm mt-2"
              >
                {team.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={team.logo}
                  className="h-28 w-full object-contain rounded-lg group-hover/card:shadow-xl"
                  alt={`${team.name} Logo`}
                />
              </CardItem>
              <CardItem
                translateZ="70"
                className="text-white text-sm mt-4 font-semibold"
              >
                Total Points: {team.points}
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  to="https://example.com"
                  target="__blank"
                  className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs font-normal text-white hover:underline"
                >
                  Learn More →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-white text-[#1f5156] text-xs font-bold hover:bg-gray-300"
                >
                  Register
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTeams;
