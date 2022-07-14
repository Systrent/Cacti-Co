import { css } from '@emotion/react'
import ActionButton from './ActionButton';
export const Actions = () => {
  return (
    <div
      css={css`
        display: flex;
        gap: 25px;
      `}
    >
      <ActionButton label="Custom order" isDark={true}/>
      <ActionButton label="Existing inventory" isDark={false}/>
    </div>
  );
};