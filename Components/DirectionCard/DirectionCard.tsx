import React from "react";
import VStack from "../Basic/VStack/VStack";
import Image from "next/image";
import Button from "../Basic/Button/Button";

export default function DirectionCard({
  icon,
  title,
  description,
  distance,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  distance: string;
  link?: string;
}) {
  return (
    <VStack
      style={{
        background:
          "linear-gradient(180deg, rgba(20,32,43,1) 10%, rgba(0,34,65,1) 100%)",
      }}
      className="text-white p-[1rem] rounded-[13px] gap-[1.2rem] sm:gap-[1.5rem] flex-1 w-[100%] sm:w-auto lg:w-[18rem]"
    >
      <div className="relative w-[1.5rem] h-[1.5rem]">
        <Image src={icon} fill alt={title} />
      </div>
      <h6 className="text-small uppercase text-dull">{title}</h6>
      <VStack>
        <p className="text-basic">{description}</p>
        <p className="text-small">{distance}</p>
      </VStack>
      <Button className="btn-secondary w-max mt-[auto]">Get Direction</Button>
    </VStack>
  );
}
