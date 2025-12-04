interface PulseFillerProps {
  color?: string;
}

interface PulseFillerTextProps {
  lines: number;
  height: number;
  gap?: number;
  color?: string;
}

export const PulseFiller = ({ color }: PulseFillerProps) => {
  return (
    <div className={`h-3.5 w-16 animate-pulse rounded-sm ${color ? `bg-${color}` : "bg-gray-200"}`}>
    </div>
  );
};


export const PulseFillerText = ({ lines, height, gap=2, color }: PulseFillerTextProps) => {
  return (
    <div className={`flex flex-col gap-4 w-full`} style={{ gap: `${gap * 4}px` }}>
      {
        Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            style={{ height: `${height * 4}px` }}
            className={`w-full animate-pulse rounded-sm ${color ? `bg-${color}` : "bg-gray-200"}`}
          />
        ))
      }
    </div>
  );
};