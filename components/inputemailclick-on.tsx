import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import CheckIcon from "./check-icon";

export type InputemailclickOnType = {
  className?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
};

const InputemailclickOn: NextPage<InputemailclickOnType> = ({
  className = "",
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
}) => {
  const inputemailclickOnStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const inputemailclickOn1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  return (
    <div
      className={`self-stretch bg-state-dark-active flex flex-row items-start justify-start max-w-full text-left text-3xs text-state-light font-button-small-bold-13 ${className}`}
      style={inputemailclickOnStyle}
    >
      <div
        className="flex-1 bg-gray-100 flex flex-row items-end justify-between py-5 px-6 box-border relative max-w-full gap-5"
        style={inputemailclickOn1Style}
      >
        <div
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-miscellaneous-sidebar-shadow-drag-over border-accent-accent-02 border-[2px] border-solid box-border"
          style={rectangleStyle}
        />
        <div className="flex flex-col items-start justify-start z-[1]">
          <b className="relative tracking-[0.9px] leading-[16px] uppercase inline-block min-w-[36px]">
            Email
          </b>
          <div className="flex flex-row items-start justify-start gap-[5px] text-sm text-state-bold-white">
            <div className="relative leading-[24px] font-semibold inline-block min-w-[88px] whitespace-nowrap">
              tam@ui8.net
            </div>
            <div className="h-5 w-0.5 relative rounded-12xs bg-color-primary-cta" />
          </div>
        </div>
        <CheckIcon />
      </div>
    </div>
  );
};

export default InputemailclickOn;
