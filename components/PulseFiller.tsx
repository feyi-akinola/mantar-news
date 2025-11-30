interface PulseFillerTextProps {
  lines: number;
  height: number;
  gap?: number;
}

export const PulseFiller = () => {
  return (
    <div className="h-3.5 w-16 animate-pulse bg-gray-200 rounded-sm">
    </div>
  );
};


export const PulseFillerText = ({ lines, height, gap=2 }: PulseFillerTextProps) => {
  return (
    <div className={`flex-col-start_ w-full`} style={{ gap: `${gap * 4}px` }}>
      {
        Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            style={{ height: `${height * 4}px` }}
            className={`w-full animate-pulse bg-gray-200 rounded-sm`}
          />
        ))
      }
    </div>
  );
};