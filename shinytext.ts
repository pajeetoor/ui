import { CSSProperties, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ChamakTextProps {
  children: ReactNode;
  className?: string;
  chamakWidth?: number; // 'Chamak' meaning 'shine' or 'glow'
}

export const ChamakText: FC<ChamakTextProps> = ({
  children,
  className,
  chamakWidth = 120,
}) => {
  return (
    <p
      style={
        {
          "--chamak-width": `${chamakWidth}px`, // Using 'chamak' for glow effect
        } as CSSProperties
      }
      className={cn(
        "text-brown-600/80 dark:text-brown-300/80 w-fit", // Brown color for a more earthy feel

        // Chamak effect
        "animate-chamak-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--chamak-width)_100%] [transition:background-position_1s_ease-in-out_infinite]",

        // Chamak gradient with Indian-inspired colors
        "bg-gradient-to-r from-transparent via-saffron-500/80 via-60% to-transparent dark:via-turquoise-500/80",

        className,
      )}
    >
      {children}
    </p>
  );
};
