interface LegendItem {
  color: string;
  label: string;
}

export function ChartLegend({ items }: { items: LegendItem[] }) {
  return (
    <div className="flex gap-3.5">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5 text-xs text-t2">
          <i className="inline-block h-2 w-2 rounded-[2px]" style={{ background: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
