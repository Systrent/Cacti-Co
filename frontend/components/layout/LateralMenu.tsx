import { HeaderButton } from "./HeaderButton"
import { css } from "@emotion/react";
//import { useUser } from "../../lib/user";

export const LateralMenu = () => {
  //DELETE: const { user } = useUser();
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <HeaderButton title="Shop"></HeaderButton>
      <HeaderButton title="Account"></HeaderButton>
      <HeaderButton title="Menu"></HeaderButton>
    </div>
  );
};
