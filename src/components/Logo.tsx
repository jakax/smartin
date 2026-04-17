import Image from "next/image";

interface LogoProps {
  width?: number;
  className?: string;
}

export default function Logo({ width = 160, className }: LogoProps) {
  const height = Math.round(width * (75.86 / 626.17));

  return (
    <Image
      src="/images/logo/smartin-horizontal-NO ISO.svg"
      alt="SmartIn"
      width={width}
      height={height}
      className={className}
    />
  );
}