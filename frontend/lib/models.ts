import React, { useContext } from 'react';

export interface IModels {
	name: string;
	img?: string;
}

export const ModelsContext = React.createContext<{
	modelS?: IModels;
	model3?: IModels;
	modelX?: IModels;
	modelY?: IModels;
}>({});

export const useModels = () => {
	const ctx = useContext(ModelsContext);
	return ctx;
};
