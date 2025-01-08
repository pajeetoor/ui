import { cn } from "@/lib/utils";

interface TejaBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  width?: number;
  anchor?: number;
  colorStart?: string;
  colorEnd?: string;
  delay?: number;
}

export const TejaBeam = ({
  className,
  size = 200,
  duration = 15,
  width = 1.5,
  anchor = 90,
  colorStart = "#ff5722", // Saffron-inspired
  colorEnd = "#ff9800",  // Marigold-inspired
  delay = 0,
}: TejaBeamProps) => {
  return (
    <div
      style={{
        "--size": size,
        "--duration": duration,
        "--anchor": anchor,
        "--border-width": width,
        "--color-from": colorStart,
        "--color-to": colorEnd,
        "--delay": `-${delay}s`,
      } as React.CSSProperties}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-full [border:calc(var(--border-width)*1px)_solid_transparent]",
        "mask-clip:padding-box,border-box mask-composite:intersect mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-teja-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
};
