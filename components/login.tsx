import type { NextPage } from "next";
import InputemailclickOn from "./inputemailclick-on";
import Inputpassword from "./inputpassword";
import Forgetpassword from "./forgetpassword";
import VerifyButton from "./verify-button";
import ButtonprimaryfullWidth from "./buttonprimaryfull-width";

export type LoginType = {
  className?: string;
};

const Login: NextPage<LoginType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-14 text-center text-13xl text-state-bold-white font-headline-h4-medium-32 ${className}`}
    >
      <img
        className="w-[36.8px] h-8 relative"
        loading="lazy"
        alt=""
        src="/group-2.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[47px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[40px] font-medium font-[inherit]">
            <p className="m-0">Sign in to</p>
            <p className="m-0">{`Predictx AI `}</p>
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-col items-end justify-start gap-4">
              <InputemailclickOn
                propBackgroundColor="unset"
                propBackgroundColor1="unset"
                propBackgroundColor2="#242731"
              />
              <Inputpassword
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propBackgroundColor1="#191b20"
              />
              <Forgetpassword
                linkButton="Forgot Password?"
                propMinWidth="115px"
              />
            </div>
            <VerifyButton propGap="57px" propFontWeight="bold" />
            <ButtonprimaryfullWidth propFlex="unset" propHeight="48px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
