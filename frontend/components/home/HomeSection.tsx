import { css } from '@emotion/react';
import { MainProduct } from './MainProduct';
import { ProductList } from './ProductList';

export const HomeSection = ({ imageCactus }) => {
	return (
		<div
			className='h-screen w-full flex justify-center items-center bg-[#99ffe2]'
			css={css`
				background-image: radial-gradient(at 87% 55%, hsla(161, 75%, 60%, 0.49) 0px, transparent 50%),
					radial-gradient(at 65% 21%, hsla(108, 77%, 71%, 0.5) 0px, transparent 50%),
					radial-gradient(at 33% 90%, hsla(175, 87%, 62%, 0.75) 0px, transparent 50%),
					radial-gradient(at 41% 0%, hsla(184, 77%, 66%, 0.78) 0px, transparent 50%),
					radial-gradient(at 33% 53%, hsla(0, 100%, 98%, 0.75) 0px, transparent 50%),
					radial-gradient(at 64% 70%, hsla(240, 59%, 70%, 0.61) 0px, transparent 50%);
			`}
		>
			<div className='bg-black/25 h-screen w-full flex'>
				<div className='h-screen w-1/2 flex flex-col justify-center items-center pl-32 pr-20 gap-4'>
					<MainProduct
						image='images/cactus_2.png'
						name='Astrophytum Asterias V Type'
						description='Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.'
						price={10}
					/>

					<div className='h-28 w-full'>
						<ProductList />
					</div>
				</div>
				<div className='h-screen w-1/2 flex flex-col justify-center items-center pl-20 pr-32'>
					<div>TEXT</div>
					<div>BOTON</div>
				</div>
			</div>
		</div>
	);
};
