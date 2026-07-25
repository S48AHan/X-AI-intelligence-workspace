import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", "aria-hidden": true } as const;

export function SparkIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M9 2l1.8 4.2L15 8l-4.2 1.8L9 14l-1.8-4.2L3 8l4.2-1.8L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
}

export function BoltIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M10 1L3 10h5l-1 7 7-9H9l1-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" /><path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function BellIcon(props: IconProps) {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}><path d="M8 2a3.5 3.5 0 0 0-3.5 3.5c0 4-1.5 5-1.5 5h10s-1.5-1-1.5-5A3.5 3.5 0 0 0 8 2ZM6.5 13a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function SearchIcon(props: IconProps) {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" /><path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
}
