import React from "react";
import { bullAvatar, crown } from "../../assets/images/images";
import "../../assets/css/leaderboard.css";
import Badge from "../common/Badge";

function Leaderboard() {
  return (
    <>
      <div className="funky-card-group md:grid md:grid-cols-2 gap-10 px-10">
        <div className="bg-[#063E5A] rounded-lg p-10">
          <div className="section-topic text-center">Top FUNKY holders</div>
          <div className="grid grid-cols-4 place-items-center py-10">
            <div className="text-center pt-28">
              <div className="relative">
                <img
                  src={bullAvatar}
                  alt="Second"
                  className="not-first w-full"
                />
                <div className="absolute top-0 right-0">
                  <Badge number="2" />
                </div>
              </div>
              <div className="text-[#A8A8A8]">@username</div>
              <div className="text-[#42FF00] text-xl">5</div>
            </div>

            <div className="col-span-2 ">
              <div className="text-center flex flex-col">
                <div className="self-center py-2">
                  <img src={crown} alt="crown" className="w-20 " />
                </div>
                <div className="relative">
                  <img src={bullAvatar} alt="First" className="first  w-full" />
                  <div className="absolute top-0 right-0">
                    <Badge number="1" />
                  </div>
                </div>
                <div className="text-[#A8A8A8] text-2xl">@username</div>
                <div className="text-[#42FF00] text-4xl">5</div>
              </div>
            </div>

            <div className="text-center pt-28">
              <div className="relative ">
                <img
                  src={bullAvatar}
                  alt="Second"
                  className="not-first  w-full"
                />
                <div className="absolute top-0 right-0">
                  <Badge number="3" />
                </div>
              </div>
              <div className="text-[#A8A8A8]">@username</div>
              <div className="text-[#42FF00] text-xl">5</div>
            </div>
          </div>
        </div>

        <div>
          <div className=" grid grid-cols-7  place-items-center gap-y-5 py-5">
            {[4, 5, 6, 7, 8, 9, 10].map((num) => (
              <>
                <Badge number={num} />
                <div className="bg-[#3C3C3C] col-span-6 grid grid-cols-3  rounded-full text-center  place-self-stretch place-items-center">
                  <img
                    src={bullAvatar}
                    alt="Second"
                    className="not-first place-self-start"
                  />
                  <div className="text-[#A8A8A8] text-xl">@username</div>
                  <div className="text-[#42FF00] text-xl">5</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
