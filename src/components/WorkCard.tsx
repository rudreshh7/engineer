import React from "react";
import Image from "next/image";

const WorkCard = ({ id, name, workImg, icon, description }) => {
  return (
    <div>
      <Image
        src={workImg}
        width={1920}
        height={1080}
        className="max-w-full"
        alt="work images"
      />
      <div className="flex items-center gap-2">
        <Image src={icon} width={20} height={20} alt="icons" />
        <p className="font-bold">{name}</p>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default WorkCard;
