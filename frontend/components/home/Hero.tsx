import { HeroSubtitle } from './HeroSubtitle';
import { HeroTitle } from './HeroTitle';

interface HeroProps {
  labelTitle: string;
  labelSubTitle: string;
  aSubtitle: string;
}

export const Hero: React.FC<HeroProps> = ({labelTitle , labelSubTitle, aSubtitle}) => {
  return (
    <div
      className="flex flex-col gap-2"
    >
      <HeroTitle label={labelTitle}/>
      <HeroSubtitle label={labelSubTitle} a={aSubtitle}/>
    </div>
  );
};