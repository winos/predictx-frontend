import type { NextPage } from "next";
import Login from "../components/login";
import Forgetpassword from "../components/forgetpassword";

const Mobile: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-14 px-[30px] pb-10 box-border gap-[211px] leading-[normal] tracking-[normal] text-left text-smi text-state-bold-white font-button-small-bold-13">
      <Login />
      <div className="flex flex-row items-start justify-start py-0 px-[38px]">
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[11px]">
          <b className="relative leading-[20px] inline-block min-w-[97px]">
            Not a member?
          </b>
          <Forgetpassword linkButton="Sign up now" propMinWidth="78px" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
