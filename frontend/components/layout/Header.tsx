import { Logo } from "../shared/Logo";
import { MainMenu } from "./MainMenu";

export const Header = () => {
  return (
    <div
      className="flex justify-center items-center fixed top-0 z-10 w-full h-12 border-solid border-b-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm"
    >
      <div
        className="flex justify-center items-center gap-20"
      >
        <button
          className="flex justify-center items-center gap-2"
        >
          <img src="/images/cacti_co_logo.svg" width="18" height="36" alt="cacti_co_logo" />
          <Logo title="cacti-co"/>
        </button>
        <MainMenu />
      </div>
    </div>
  );
};
