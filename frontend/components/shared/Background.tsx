import tw from 'twin.macro';
import { css } from '@emotion/react';

export const Background = ({ children }) => {
	return (
		<div
			tw='h-screen w-full bg-[#99ffe2]'
			css={css`
				background-image: radial-gradient(at 87% 55%, hsla(161, 75%, 60%, 0.49) 0px, transparent 50%),
					radial-gradient(at 65% 21%, hsla(108, 77%, 71%, 0.5) 0px, transparent 50%),
					radial-gradient(at 33% 90%, hsla(175, 87%, 62%, 0.75) 0px, transparent 50%),
					radial-gradient(at 41% 0%, hsla(184, 77%, 66%, 0.78) 0px, transparent 50%),
					radial-gradient(at 33% 53%, hsla(0, 100%, 98%, 0.75) 0px, transparent 50%),
					radial-gradient(at 64% 70%, hsla(240, 59%, 70%, 0.61) 0px, transparent 50%);
			`}
		>
			<div tw='bg-black/25 h-screen w-full'>{children}</div>
		</div>
	);
};
