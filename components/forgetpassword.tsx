import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ForgetpasswordType = {
  className?: string;
  linkButton?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Forgetpassword: NextPage<ForgetpasswordType> = ({
  className = "",
  linkButton,
  propMinWidth,
}) => {
  const linkButtonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-smi text-color-primary-cta font-button-small-bold-13 ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-3">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-4 h-4 relative"
            loading="lazy"
            alt=""
            src="/icon-16link.svg"
          />
        </div>
        <b
          className="relative leading-[20px] inline-block min-w-[78px]"
          style={linkButtonStyle}
        >
          {linkButton}
        </b>
      </div>
    </div>
  );
};

export default Forgetpassword;
