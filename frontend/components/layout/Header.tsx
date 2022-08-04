import { TokenApp } from "../shared/TokenApp";
import { MainMenu } from "./MainMenu";

export const Header = () => {
	return (
		<TokenApp>
			<div className='flex justify-center items-center fixed top-0 z-10 w-full h-12 border-solid border-b-2 border-white/30 bg-white/25 shadow-sm backdrop-blur-sm'>
				<MainMenu />
			</div>
		</TokenApp>
	);
};
