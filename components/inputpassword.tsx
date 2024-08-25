import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InputpasswordType = {
  className?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Inputpassword: NextPage<InputpasswordType> = ({
  className = "",
  propBorderRadius,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const inputpasswordStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  const rectangle1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className={`self-stretch rounded-8xs bg-state-dark-active flex flex-row items-start justify-start max-w-full text-left text-3xs text-state-light font-button-small-bold-13 ${className}`}
      style={inputpasswordStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-5 px-6 pb-[27px] box-border relative max-w-full">
        <div
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-miscellaneous-sidebar-shadow-drag-over mix-blend-normal"
          style={rectangle1Style}
        />
        <div className="flex flex-col items-start justify-start gap-[9px] z-[1]">
          <b className="relative tracking-[0.9px] leading-[16px] uppercase inline-block min-w-[65px]">
            Password
          </b>
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
            <div className="h-2 w-2 relative rounded-[50%] bg-state-bold-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputpassword;
