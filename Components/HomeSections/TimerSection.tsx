import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";

export default function TimerSection() {
  return (
    <Center className="common-space-x">
      <VStack className="text-center text-white">
        <h2 className="banner-title">05 Days 100 Hours</h2>
        <p className="banner-subtitle text-dull">To Celebrate with you!</p>
      </VStack>
    </Center>
  );
}
