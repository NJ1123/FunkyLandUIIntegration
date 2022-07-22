import React from "react";
import { bush } from "../../assets/images/images";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import "../../assets/css/community.css";

function Community() {
  return (
    <>
      <div className="text-center bg-[#236428] " id="community">
        <img src={bush} alt="bush" className="w-full -translate-y-1/2" />
        <div className="section-sm text-white ">
          <h2 className="section-title ">Join Our Community</h2>
          <p className="section-subtitle py-10 mx-10 md:mx-auto">
            Join us on Discord, Telegram and follow us on Twitter for more
            information, our latest news and announcements
          </p>
          <div className="flex justify-center md:gap-20 pb-20">
            <div className="community-icon-bg">
              <a
                href="https://discord.com/invite/TmBfK7FuGz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="community-icon bg-[#7289da]">
                  <FaDiscord />
                </div>
              </a>
            </div>
            <div className="community-icon-bg">
              <a
                href="https://t.me/FunkyEggsOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="community-icon bg-[#229ED9]">
                  <FaTelegramPlane />
                </div>
              </a>
            </div>
            <div className="community-icon-bg">
              <a
                href="https://twitter.com/funkymetaverse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="community-icon bg-[#1DA1F2]">
                  <FaTwitter />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
