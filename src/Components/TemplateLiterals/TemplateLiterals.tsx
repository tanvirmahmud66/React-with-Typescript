import React from "react";

type vertical = "left" | "center" | "right";
type horizontal = "top" | "center" | "bottom";

type PositionProps = {
  position: Exclude<`${vertical}-${horizontal}`, "center-center"> | "center";
};

export default function TemplateLiterals({ position }: PositionProps) {
  return <div>Notification Position - {position}</div>;
}
