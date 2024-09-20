import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import DirectionCard from "../DirectionCard/DirectionCard";

const directions = [
  {
    icon: "/Assets/railway.png",
    title: "Nearest railway Station",
    description: "Lorem Ipsum",
    distance: "5.5 KMs away",
  },
  {
    icon: "/Assets/bus.png",
    title: "Nearest bus station",
    description: "Lorem Ipsum",
    distance: "5.5 KMs away",
  },
  {
    icon: "/Assets/airport.png",
    title: "Nearest Airport",
    description: "Lorem Ipsum",
    distance: "5.5 KMs away",
  },
];

export default function DirectionSection() {
  return (
    <Center>
      <VStack className="common-space-x gap-[1rem] items-center">
        <p className="text-white border-[2px] border-[#024D83] p-[0.5rem] px-[1rem] rounded-full">
          Event Info
        </p>
        <h3 className="section-heading text-dull max-w-[30rem] text-center">
          How to <span className="text-white">reach</span> the{" "}
          <span className="text-white">venue</span> if you are{" "}
          <span className="text-white">coming</span> from{" "}
          <span className="text-white">far</span>?
        </h3>

        <div className="flex flex-col sm:flex-row gap-[1.5rem] w-[100%]">
          {directions.map((direction) => (
            <DirectionCard {...direction} />
          ))}
        </div>
      </VStack>
    </Center>
  );
}
