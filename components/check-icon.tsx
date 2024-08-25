import type { NextPage } from "next";
import FCheckIcon from "./f-check-icon";

export type CheckIconType = {
  className?: string;
};

const CheckIcon: NextPage<CheckIconType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-end pt-0 px-0 pb-1 ${className}`}
    >
      <FCheckIcon />
    </div>
  );
};

export default CheckIcon;
