interface ArchImageProps {
  src: string;
  alt: string;
  rotation: number;
  top: string;
  left?: string;
  right?: string;
}

const ArchImage: React.FC<ArchImageProps> = ({
  src,
  alt,
  rotation,
  top,
  left,
  right,
}) => (
  <div
    className="absolute w-24 h-24"
    style={{
      transform: `rotate(${rotation}deg)`,
      top,
      left,
      right,
    }}
  >
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);

export default ArchImage;
