interface LogoProps {
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
  return(
  <div>
    <h2
      className="font-['Quicksand'] text-2xl font-bold text-white leading-5"
    >{title}</h2>
  </div>
)}