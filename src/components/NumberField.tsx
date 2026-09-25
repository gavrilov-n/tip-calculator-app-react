import { useState } from "react";

interface NumberFieldProps {
  label: string;
  id: string;
  iconSrc: string;
  value: string | number;
  onChange: (value: string) => void;
  error?: string;
}

function NumberField({ label, id, iconSrc, value, onChange, error }: NumberFieldProps) {
  const [touched, setTouched] = useState(false);
  const showError = touched && Boolean(error);

  return (
    <div className="flex flex-col gap-1.5 mb-8">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className={showError ? "font-bold text-[#c96c4c]" : "font-bold text-gray-600"}>
          {label}
        </label>
        {showError && <span className="text-[#c96c4c] text-sm">{error}</span>}
      </div>
      <div className="relative">
        <img
          src={iconSrc}
          alt=""
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="number"
          id={id}
          name={id}
          placeholder="0"
          min="0"
          max="200000"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => setTouched(true)}
          className={`w-full pr-3 text-right bg-gray-50 p-2.5 text-2xl font-bold text-gray-600 placeholder:text-gray-500 border-2 rounded-lg focus:outline-none ${
            showError
              ? "border-[#c96c4c]"
              : "border-transparent focus:border-[#26C2AE]"
          }`}
        />
      </div>
    </div>
  );
}

export default NumberField;
