"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import HeroBg from "@/public/Images/HeroBg.png";
import HeroShoe from "@/public/Images/HeroShoe.png";
import HeroText from "@/public/Images/HeroText.svg";
import HeroTextDark from "@/public/Images/HeroTextDark.svg";
import { Stack } from "@mui/material";
import Image from "next/image";
export default function Hero() {
  const { mode } = useThemeContext();
  return (
    <Stack
      sx={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "100%",
        minHeight: { xs: "60vh", sm: "70vh" },
      }}
      direction={"row"}
      position="relative"
      alignItems={"center"}
      overflow={"hidden"}
      data-aos="fade-right"
    >
      <Stack width={{ xs: "80%", md: "50%" }} ml={"10%"}>
        <Image
          src={mode == "dark" ? HeroTextDark : HeroText}
          alt="Discover limited sneakers without limitations"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          right: "-7%",
          bottom: { xs: "0%", md: "0" },
          width: "70%",
          height: "auto",
        }}
        data-aos="slide-left"
        data-aos-delay={500}
      >
        <Image
          src={HeroShoe}
          alt="Nike Shoes"
          style={{ width: "100%", height: "auto" }}
        />
      </Stack>
    </Stack>
  );
}
