import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "none",
  "aria-hidden": true,
} as const;

export function GridIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

export function DatasetsIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><ellipse cx="9" cy="4" rx="6" ry="2.4" stroke="currentColor" strokeWidth="1.4" /><path d="M3 4v10c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4V4M3 9c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

export function ModelsIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M7 1v3M11 1v3M7 14v3M11 14v3M1 7h3M1 11h3M14 7h3M14 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

export function SettingsIcon(props: IconProps) {
  return <svg {...iconProps} {...props}><circle cx="9" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.4" /><path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.8 3.8l1.4 1.4M12.8 12.8l1.4 1.4M14.2 3.8l-1.4 1.4M5.2 12.8l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}
