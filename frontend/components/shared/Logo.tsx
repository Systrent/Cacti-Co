interface LogoProps {
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
  return(
  <div>
    <h2
      className="font-['Quicksand'] text-3xl font-bold text-[#393C54]"
    >{title}</h2>
  </div>
)}