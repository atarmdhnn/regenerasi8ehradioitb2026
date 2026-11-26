"use client";

import { useRef } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";

export default function LearnMoreButton() {
  const targetRef = useRef(null);

  const handleClick = () => {
    if (!targetRef.current) {
      targetRef.current = document.getElementById("our-journey");
    }
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ButtonPrimary onClick={handleClick} className="px-8 py-3 text-lg">
      Learn More
    </ButtonPrimary>
  );
}