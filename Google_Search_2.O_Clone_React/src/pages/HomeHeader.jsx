import React from "react";
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-4">
        <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
          <a
            href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgmail%26oq%3D%26gs_lcrp%3DEgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQo0OTc1NGowajE1qAIIsAIB%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAlAAQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1391969482%3A1706523854656238&theme=glif"
            target="blank"
          >
            Gmail
          </a>
        </span>
        <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
          Images
        </span>
      </div>

      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
