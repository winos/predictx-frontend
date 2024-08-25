import type { NextPage } from "next";
import Layerizquierdo from "../components/layerizquierdo";
import FormsignIn from "../components/formsign-in";

const DesktopSignIn: NextPage = () => {
  return (
    <div className="w-full relative bg-blueviolet flex flex-row items-start justify-start py-0 pl-[30px] pr-0 box-border gap-[47.9px] leading-[normal] tracking-[normal] mq750:gap-6 mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:pb-5 mq1125:box-border">
      <div className="w-[550px] flex flex-col items-start justify-start pt-[83px] px-0 pb-0 box-border min-w-[550px] max-w-full mq750:min-w-full mq450:pt-[35px] mq450:box-border mq1050:pt-[54px] mq1050:box-border mq1125:flex-1">
        <Layerizquierdo />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start min-w-[528px] max-w-full mq750:min-w-full">
        <div className="flex-1 flex flex-row items-start justify-center py-[232px] px-5 box-border relative max-w-full mq450:pt-[98px] mq450:pb-[98px] mq450:box-border mq1050:pt-[151px] mq1050:pb-[151px] mq1050:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-200" />
          <FormsignIn
            predictX="PredictX"
            linkButton="Forgot Password?"
            linkButton1="Sign up now"
            propMinWidth="115px"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopSignIn;
