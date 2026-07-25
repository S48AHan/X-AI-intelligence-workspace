import type { SVGProps } from "react";

interface LogoMarkProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export function LogoMark({ size = 22, ...props }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M11 1L21 11L11 21L1 11L11 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 6.5L15.5 11L11 15.5L6.5 11L11 6.5Z" fill="currentColor" />
    </svg>
  );
}
