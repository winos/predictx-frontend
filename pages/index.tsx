import type { NextPage } from "next";
import FormsignIn from "../components/formsign-in";

const TabletsignIn: NextPage = () => {
  return (
    <div className="w-full h-[1366px] relative bg-color-dark-darkmode-bg leading-[normal] tracking-[normal] text-center text-37xl text-state-bold-white font-headline-h4-medium-32 mq450:h-auto mq450:min-h-[1366]">
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1000px] overflow-hidden object-cover"
        alt=""
        src="/sign-inintro@2x.png"
      />
      <section className="absolute h-full w-[calc(100%_-_400px)] top-[0%] right-[0px] bottom-[0%] left-[400px] flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="flex-1 bg-black flex flex-row items-start justify-center py-[403px] px-5 box-border max-w-full">
          <div className="h-[1366px] w-[624px] relative hidden max-w-full" />
          <FormsignIn
            predictX="Unity Exchange"
            propBackgroundColor="unset"
            propBackgroundColor1="unset"
            propBackgroundColor2="#242731"
            propBorderRadius="unset"
            propBackgroundColor3="unset"
            propBackgroundColor11="#191b20"
            linkButton="Forgot Password?"
            linkButton1="Sign up now"
            propMinWidth="115px"
            propMinWidth1="78px"
            propGap="107px"
            propFontWeight="600"
            propFlex="1"
            propHeight="unset"
          />
        </div>
      </section>
      <div className="absolute top-[250px] left-[0px] w-[401px] flex flex-col items-end justify-start gap-[247px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[64px] font-semibold font-[inherit] z-[1] mq450:text-15xl mq450:leading-[38px] mq750:text-26xl mq750:leading-[51px]">{`PredictX `}</h1>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[11px] pr-2.5 box-border max-w-full text-13xl">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.5px] leading-[40px] font-normal font-[inherit] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
            <p className="m-0">Ai for predict prices</p>
            <p className="m-0">Crypto, Futures and Forex</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TabletsignIn;
