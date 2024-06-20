import React from "react";
import Image from "next/image";

interface WorkCardProps {
  id: number;
  name: string;
  workImg: string;
  icon: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  id,
  name,
  workImg,
  icon,
  description,
}) => {
  return (
    <div>
      <Image
        src={workImg}
        width={1920}
        height={1080}
        className="max-w-full"
        alt={name}
      />
      <div className="flex items-center gap-2">
        <Image src={icon} width={20} height={20} alt={`${name}icon`} />
        <p className="font-bold">{name}</p>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default WorkCard;
