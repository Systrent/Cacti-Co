interface HeroTitleProps {
	label: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ label }) => {
	return (
		<div
      className="text-center text-4xl font-medium"
		>
			<h2>{label}</h2>
		</div>
	);
};
