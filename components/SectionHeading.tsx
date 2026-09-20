const SectionHeading = ({ index, label }: { index: string; label: string }) => {
  return (
    <div className="flex items-end gap-5 md:gap-8 mb-12 md:mb-16">
      <span className="font-adelia text-6xl md:text-8xl leading-none text-ink-ghost select-none">
        {index}
      </span>
      <div className="flex-1 flex items-center gap-4 pb-1 md:pb-2">
        <span className="text-sm tracking-widest uppercase text-primary whitespace-nowrap">
          {label}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
};

export default SectionHeading;
