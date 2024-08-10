import Reac from "react";

import Stone1 from "@/src/assets/stone1.svg";
import Stone2 from "@/src/assets/stone2.svg";
import Stone3 from "@/src/assets/stone3.svg";
import Stone4 from "@/src/assets/stone4.svg";
import Stone5 from "@/src/assets/stone5.svg";
import Shape1 from "@/src/assets/1.png";
import Shape2 from "@/src/assets/2.png";
import Shape3 from "@/src/assets/3.png";
import Shape4 from "@/src/assets/4.png";
import Shape5 from "@/src/assets/5.png";
import Shape6 from "@/src/assets/6.png";
import ArchImage from "./ArcImage";

const GameArena: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <ArchImage
          src={Shape1}
          alt="Image 1"
          rotation={-60}
          top="10%"
          left="5%"
        />
        <ArchImage
          src={Shape2}
          alt="Image 2"
          rotation={-30}
          top="5%"
          left="25%"
        />
        <ArchImage src={Shape3} alt="Image 3" rotation={0} top="0" left="45%" />
        <ArchImage
          src={Shape4}
          alt="Image 4"
          rotation={30}
          top="5%"
          right="25%"
        />
        <ArchImage
          src={Shape5}
          alt="Image 5"
          rotation={60}
          top="10%"
          right="5%"
        />
        <ArchImage
          src={Shape6}
          alt="Image 6"
          rotation={0}
          top="40%"
          left="45%"
        />
      </div>
    </div>
  );
};

export default GameArena;
