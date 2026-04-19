import Image from "next/image";

interface IsoTipoProps {
  width?: number;
  className?: string;
}

export default function IsoTipo({ width = 160, className }: IsoTipoProps) {
  const height = Math.round(width * (75.86 / 626.17));

  return (
    <Image
      src="/images/logo/smartin-iso.svg"
      alt="SmartIn-ISO"
      width={width}
      height={height}
      className={className}
    />
  );
}