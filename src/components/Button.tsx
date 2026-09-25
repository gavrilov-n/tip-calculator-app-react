interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
}

function Button({ onClick, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`md: mt-[110px] uppercase w-full h-[48px] rounded-lg font-semibold tracking-wide text-xl transition-colors ${
        disabled
          ? "bg-[#0D686D] text-[#085c61] cursor-not-allowed"
          : "bg-[#26c2ae] text-[hsl(183,100%,15%)] hover:bg-[#9fe8df] cursor-pointer"
      }`}
    >
      Reset
    </button>
  );
}

export default Button;
