import React from "react";
import PropsComponent from "./PropsComponent";

export const ExtractComponentProps = (
  Props: React.ComponentProps<typeof PropsComponent>
) => {
  return <div>
    <p>{Props.username}</p>
    <p>{Props.email}</p>
    <p>{Props.password}</p>
  </div>;
};
