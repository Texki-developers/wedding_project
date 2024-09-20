import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import Header from "../Header/Header";
import Button from "../Basic/Button/Button";

export default function Banner() {
  return (
    <Center className="h-[100vh] p-[1rem]">
      <VStack
        className="w-[100%] h-[100%] rounded-[15px] items-center justify-center gap-[2rem] px-[1rem]"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.5) 50%, rgba(188,238,245,0.5) 100%), url('/Assets/banner-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <VStack>
          <h1 className="text-center font-madi text-white banner-title">
            Muhsin Weds Yousaira <br /> & <br /> Mubashir Weds Hafla
          </h1>
          <p className="banner-subtitle text-white text-center">
            Join us in celebrating our wedding on 22/09/2024
          </p>
        </VStack>
        <Button
          className="btn-primary"
          onClick={() =>
            (window.location.href =
              "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240922T113000Z%2F20240922T113000Z&details=&location=Kadampuzha&text=Muhsin%20%26%20Mubashir%27s%20Wedding%20Celebration")
          }
        >
          Save the date
        </Button>
      </VStack>
    </Center>
  );
}
