import Image from 'next/image';

interface ImageLayoutProps {
  children?: any;
  src: string;
  width: string;
  height: string;
  alt?: string;
}

const ImageLayout: React.FC<ImageLayoutProps> = ({ 
  children,
  src,
  width,
  height,
  alt
}) => {
  return(
  <div>
    <Image src={src} width={width} height={height} alt={alt} />
  </div>
)}

export default ImageLayout;