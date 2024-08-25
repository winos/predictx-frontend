import type { NextPage } from "next";

export type FCheckIconType = {
  className?: string;
};

const FCheckIcon: NextPage<FCheckIconType> = ({ className = "" }) => {
  return (
    <img
      className={`w-[23px] h-[18px] relative z-[1] ${className}`}
      loading="lazy"
      alt=""
      src="/fcheck.svg"
    />
  );
};

export default FCheckIcon;
