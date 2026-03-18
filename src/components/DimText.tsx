interface Segment {
  text: string;
  bright?: boolean;
}

interface DimTextProps {
  segments: Segment[];
  className?: string;
}

export default function DimText({ segments, className = "" }: DimTextProps) {
  return (
    <span className={className}>
      {segments.map((seg, i) => (
        <span
          key={i}
          style={{
            color: seg.bright ? "#E8EDF5" : "#3D4F6B",
            transition: "color 0.2s",
          }}
        >
          {seg.text}
        </span>
      ))}
    </span>
  );
}