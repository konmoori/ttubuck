interface IndicatorDotProps {
  active?: boolean;
}

export function IndicatorDot({ active = false }: IndicatorDotProps) {
  return (
    <div
      className={`rounded-[14.428px] shrink-0 size-[7.935px] ${
        active ? 'bg-[#ff6665]' : 'bg-[#e8e8e8]'
      }`}
    />
  );
}

interface PageIndicatorProps {
  total: number;
  current: number;
}

export function PageIndicator({ total, current }: PageIndicatorProps) {
  return (
    <div className="content-stretch flex gap-[7px] items-start justify-center pb-[33px] relative shrink-0 w-full">
      {Array.from({ length: total }).map((_, index) => (
        <IndicatorDot key={index} active={index === current} />
      ))}
    </div>
  );
}
