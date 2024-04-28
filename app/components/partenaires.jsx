import React from "react";
import Tabs from "./tabs";
const partenaires = () => {
  const tabs = [
    {
      id: "1",
      title: "All",
    },
    {
      id: "2",
      title: "Tissage et bonneterie",
    },
    {
      id: "3",
      title: "Finissage",
    },
    {
      id: "4",
      title: "Filature",
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default partenaires;
