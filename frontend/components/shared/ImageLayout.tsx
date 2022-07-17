import { css } from '@emotion/react';
import Image from 'next/image';

interface ImageLayoutProps {
  src: string;
  width: string;
  height: string;
  alt?: string;
}

export const ImageLayout: React.FC<ImageLayoutProps> = ({ 
  src,
  width,
  height,
  alt
}) => {
  return(
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
    <Image src={src} width={width} height={height} alt={alt} />
  </div>
)}