import type { NextPage } from "next";
import InputemailclickOn from "./inputemailclick-on";
import Inputpassword from "./inputpassword";
import Forgetpassword from "./forgetpassword";
import VerifyButton from "./verify-button";
import ButtonprimaryfullWidth from "./buttonprimaryfull-width";

export type FormsignInType = {
  className?: string;
  predictX?: string;
  propBackgroundColor?: string;
  propBackgroundColor1?: string;
  propBackgroundColor2?: string;
  propBorderRadius?: string;
  propBackgroundColor3?: string;
  propBackgroundColor11?: string;
  linkButton?: string;
  linkButton1?: string;
  propMinWidth?: string;
  propMinWidth1?: string;
  propGap?: string;
  propFontWeight?: string;
  propFlex?: string;
  propHeight?: string;
};

const FormsignIn: NextPage<FormsignInType> = ({
  className = "",
  predictX,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBorderRadius,
  propBackgroundColor3,
  propBackgroundColor11,
  linkButton,
  linkButton1,
  propMinWidth,
  propMinWidth1,
  propGap,
  propFontWeight,
  propFlex,
  propHeight,
}) => {
  return (
    <div
      className={`w-[412px] flex flex-row items-start justify-start max-w-full z-[1] text-left text-13xl text-state-bold-white font-headline-h4-medium-32 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-12 max-w-full mq450:gap-6">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[40px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
          <p className="m-0">Sign in to</p>
          <p className="m-0">{predictX}</p>
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full text-3xs text-state-light font-button-small-bold-13 mq450:gap-[29px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-4 max-w-full">
              <InputemailclickOn
                propBackgroundColor={propBackgroundColor}
                propBackgroundColor1={propBackgroundColor1}
                propBackgroundColor2={propBackgroundColor2}
              />
              <Inputpassword
                propBorderRadius={propBorderRadius}
                propBackgroundColor={propBackgroundColor3}
                propBackgroundColor1={propBackgroundColor11}
              />
              <Forgetpassword
                linkButton={linkButton}
                propMinWidth={propMinWidth}
              />
            </div>
            <VerifyButton propGap={propGap} propFontWeight={propFontWeight} />
          </div>
          <div className="self-stretch h-[84px] flex flex-col items-start justify-start gap-4 text-smi text-state-bold-white">
            <ButtonprimaryfullWidth
              propFlex={propFlex}
              propHeight={propHeight}
            />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
              <div className="flex flex-row items-start justify-start gap-[11px]">
                <b className="relative leading-[20px] inline-block min-w-[97px]">
                  Not a member?
                </b>
                <Forgetpassword
                  linkButton={linkButton1}
                  propMinWidth={propMinWidth1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsignIn;
