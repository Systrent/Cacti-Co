import { Logo } from "../shared/Logo";

export const HomeSection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen gap-40 bg-[#E7E8E3]"
    >
      <div
        className="flex justify-center items-center gap-2"
      >
        <img src="/images/cacti_co_logo.svg" width="25" height="35" alt="cacti_co_logo" />
        <Logo title="cacti-co"/>
      </div>
      <img src="/images/cacti_co_pet.svg" width="300" height="300" alt="cacti_co_logo" />
    </div>
  );
};