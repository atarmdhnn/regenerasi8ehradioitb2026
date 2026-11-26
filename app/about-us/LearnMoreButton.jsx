"use client";

import { useRef } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";

export default function LearnMoreButton({ targetId = "our-journey" }) {
  const targetRef = useRef(null);

  const handleClick = () => {
    targetRef.current ??= document.getElementById(targetId);
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ButtonPrimary onClick={handleClick} className="px-8 py-3 text-lg">
      Learn More
    </ButtonPrimary>
  );
}