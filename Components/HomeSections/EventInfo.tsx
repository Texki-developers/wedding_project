import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import Image from "next/image";
import IconText from "../IconText/IconText";

const eventInfos = [
  {
    icon: "/Assets/Clock.png",
    text: "11:30 AM",
  },
  {
    icon: "/Assets/CalendarCheck.png",
    text: "22/09/2024",
  },
  {
    icon: "/Assets/NavigationArrow.png",
    text: "Mythree Bhavan Auditorium, Kadampuzha",
  },
];

export default function EventInfo() {
  return (
    <Center className="common-space-x">
      <VStack className="gap-[1rem] items-center">
        <p className="text-white border-[2px] border-[#024D83] p-[0.5rem] px-[1rem] rounded-full">
          Event Info
        </p>
        <h3 className="section-heading text-dull max-w-[30rem] text-center">
          Find out all the{" "}
          <span className="text-white">
            details
          </span>
          ,{" "}
          <span className="text-white">
            location
          </span>
          , and{" "}
          <span className="text-white">
            travel info
          </span>{" "}
          for our special day.
        </h3>
        <div className="relative w-[100%] lg:w-[50rem] rounded-[13px] overflow-hidden aspect-video">
          <Image
            src="/Assets/section-image.png"
            fill
            className="object-cover"
            alt="Section Image"
          />
        </div>
        <div className="flex justify-center sm:flex-row flex-col divide-y sm:divide-y-0 sm:divide-x items-stretch">
          {eventInfos.map((info, i) => (
            <IconText
              key={i}
              icon={info.icon}
              text={info.text}
            />
          ))}
        </div>
      </VStack>
    </Center>
  );
}
