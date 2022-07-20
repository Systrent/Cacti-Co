import { MainMenu } from "./MainMenu";

export const Header = () => {
  return (
    <div
      className="fixed bg-transparent top-0 z-10 w-full p-3"
    >
      <div
        className="flex justify-center"
      >
        <MainMenu />
      </div>
    </div>
  );
};
