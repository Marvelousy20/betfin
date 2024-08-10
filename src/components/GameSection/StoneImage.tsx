import React from "react";

interface StoneImageProps {
  src: string | undefined;
  alt: string;
  glowColor: string;
}

const StoneImage: React.FC<StoneImageProps> = ({ src, alt, glowColor }) => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    overflow: "visible",
  };

  const imageStyle: React.CSSProperties = {
    display: "block",
    position: "relative",
    zIndex: 2,
    filter: "brightness(1.1) contrast(1.1)",
  };

  const glowStyle: React.CSSProperties = {
    position: "absolute",
    top: "-30%",
    left: "-30%",
    width: "180%",
    height: "180%",
    background: `radial-gradient(circle, ${glowColor} 0%, rgba(255, 165, 0, 0) 70%)`,
    filter: "blur(5px)",
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} style={imageStyle} />
      <div style={glowStyle}></div>
    </div>
  );
};

export default StoneImage;
