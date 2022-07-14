import { css } from "@emotion/react";

interface HeaderButtonProps {
  children?: any;
  title?: string;
  onClick?: any;
}

const background_stitch = css`
  background: transparent;
  transition: 0.3s all;
  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

const HeaderButton: React.FC<HeaderButtonProps> = ({
  children,
  onClick,
  title,
}) => {
  return (
    <span
      onClick={onClick}
      css={css`
        ${background_stitch}
        white-space: nowrap;
        color: rgba(0, 0, 0, 0.7);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.5px;
        padding: 5px 15px;
        border-radius: 12px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
      `}
    >
      {title}{children}
    </span>
  );
};

export default HeaderButton;