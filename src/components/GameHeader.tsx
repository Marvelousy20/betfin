import Info from "@/src/assets/info1.svg";
import Question from "@/src/assets/question1.png";
import Support from "@/src/assets/support1.png";
import GameArena from "@/src/components/GameSection/GameArena";

export default function GameHeader() {
  return (
    <section>
      <div className="flex justify-between items-center bg-[#131624] py-4 px-7 rounded-[10px]">
        <div className="flex items-center gap-x-4">
          <div>
            <span className="font-light text-sm">Round ID</span>
            <h3>12345</h3>
          </div>

          <div className="w-[1px] h-[33px] bg-white"></div>

          <div>
            <span className="text-yellow text-sm">WINNING POOL</span>
            <h3>12345</h3>
          </div>

          <div className="w-[1px] h-[33px] bg-white"></div>

          <div>
            <span className="text-sm text-bluish">Round ID</span>
            <h3>12345</h3>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <img src={Info} alt="info" />
            <span>Payable</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Question} alt="info" />
            <span>How to play</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Support} alt="info" />
            <span>Report</span>
          </div>
        </div>
      </div>
      <div>{/* <GameArena /> */}</div>
    </section>
  );
}
