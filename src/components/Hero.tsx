import React from "react";
import { watch, showcase } from "../utils";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full mt-20">
      <div className="h-5/6 w-full flex flex-col md:flex-row md:justify-between md:items-center p-5">
        <div className="flex flex-col justify-between md:h-40 text-xs">
          <p>
            New Delhi , IN <span>23:11:23</span>
          </p>
          <p>Scroll down to see my work</p>
        </div>

        <div className="md:w-[50%]">
          <p className="text-2xl sm:text-2xl lg:text-4xl  ">
            Rudresh, a engineer and designer from Jaipur crafting tech solutions
            with blend of design.
          </p>

          <p className="text-2xl  ">Currenty Building Erp Solution</p>
        </div>

        <div className="hidden md:flex">
          <Image src={watch} width={300} height={400} />
        </div>
      </div>
      <div>
        <video autoPlay loop width="100%" height="50%">
          <source src={showcase} />
        </video>
      </div>
    </section>
  );
};

export default Hero;
