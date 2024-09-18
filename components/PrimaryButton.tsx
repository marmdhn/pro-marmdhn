const PrimaryButton = ({ btnText }: { btnText: string }) => {
  return (
    <div className="bg-primary rounded-md">
      <div
        className={`px-3 py-1 text-primary bg-background rounded-md text-lg font-semibold border border-primary hover:translate-y-[-0.25rem] hover:translate-x-[-0.25rem] transition-transform duration-400 will-change-transform`}
      >
        {btnText}
      </div>
    </div>
  );
};

export default PrimaryButton;
