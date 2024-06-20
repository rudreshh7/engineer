import React from "react";
import { selectedWorkLists } from "../constants";
import WorkCard from "../components/WorkCard";

const SelectedWork = () => {
  return (
    <div className="flex flex-wrap ">
      {selectedWorkLists.map((work) => (
        <div key={work.id} className="w-full lg:w-1/2 p-2">
          <WorkCard
            key={work.id}
            id={work.id}
            name={work.name}
            workImg={work.workImg}
            icon={work.icon}
            description={work.description}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectedWork;
