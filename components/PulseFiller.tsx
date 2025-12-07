interface PulseFillerProps {
  color?: string;
  isLoading?: boolean;
  hasError?: boolean;
}

interface PulseFillerTextProps {
  lines: number;
  height: number;
  gap?: number;
  color?: string;
  isLoading?: boolean;
  hasError?: boolean;
}

export const PulseFiller = ({ color, isLoading, hasError }: PulseFillerProps) => {
  const bgColor = isLoading
    ? 'loading-bg_ animate-pulse'
    : hasError ? 'error-bg_' : color ? `bg-${color}` : "bg-gray_";

  return (
    <div className={`h-3.5 w-16 rounded-sm ${bgColor}`} />
  );
};


export const PulseFillerText = ({ lines, height, gap=2, color, isLoading, hasError }: PulseFillerTextProps) => {
  const bgColor = isLoading
    ? 'loading-bg_'
    : hasError ? 'error-bg_' : color ? `bg-${color}` : "bg-gray_";

  return (
    <div className={`flex flex-col gap-4 w-full`} style={{ gap: `${gap * 4}px` }}>
      {
        Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            style={{ height: `${height * 4}px` }}
            className={`w-full rounded-sm ${bgColor}`}
          />
        ))
      }
    </div>
  );
};