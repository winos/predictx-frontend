import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type VerifyButtonType = {
  className?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const VerifyButton: NextPage<VerifyButtonType> = ({
  className = "",
  propGap,
  propFontWeight,
}) => {
  const verifyButtonStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const clickToVerifyStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start p-2 relative gap-[107px] text-center text-sm text-state-bold-white font-button-small-bold-13 mq450:gap-[53px] mq450:flex-wrap ${className}`}
      style={verifyButtonStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl border-color-grey border-[2px] border-solid box-border" />
      <img
        className="h-8 w-8 relative z-[1]"
        loading="lazy"
        alt=""
        src="/scan-icon.svg"
      />
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[9px] z-[1]">
          <div
            className="relative leading-[24px] font-semibold inline-block min-w-[94px]"
            style={clickToVerifyStyle}
          >
            Click to verify
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-4 h-4 relative"
              loading="lazy"
              alt=""
              src="/cyborg.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyButton;
