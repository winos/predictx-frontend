import type { NextPage } from "next";

export type LayerizquierdoType = {
  className?: string;
};

const Layerizquierdo: NextPage<LayerizquierdoType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[127px] px-0 pb-0 relative gap-[165px] text-center text-37xl text-state-bold-white font-headline-h4-medium-32 mq750:gap-[82px] mq750:pt-[83px] mq750:box-border mq450:gap-[41px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[45px] mq750:gap-[22px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[64px] font-semibold font-[inherit] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">{`PredictX `}</h1>
        <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.5px] leading-[40px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
          <p className="m-0">Ai for predict prices</p>
          <p className="m-0">Crypto, Futures and Forex</p>
        </h1>
      </div>
      <img
        className="w-[37px] h-[32.1px] absolute !m-[0] top-[0px] left-[54.9px]"
        loading="lazy"
        alt=""
        src="/group.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
        <img
          className="h-[272px] w-[313.1px] relative"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </div>
    </div>
  );
};

export default Layerizquierdo;
