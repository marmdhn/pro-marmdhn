interface PrimaryButtonProps {
  btnText?: string;
  icon?: React.ReactNode;
}

const PrimaryButton = ({ btnText, icon }: PrimaryButtonProps) => {
  return (
    <div className="bg-primary rounded-md hover:cursor-pointer">
      <div
        className={`flex items-center justify-center space-x-2 px-3 p-2 font-sf-mono text-primary bg-background rounded-md text-sm font-semibold border border-primary hover:translate-y-[-0.25rem] hover:translate-x-[-0.25rem] transition-transform duration-400 will-change-transform`}
      >
        {icon && <span>{icon}</span>}
        {btnText && <span>{btnText}</span>}
      </div>
    </div>
  );
};

export default PrimaryButton;
