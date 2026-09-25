import { useState } from "react";

interface TipSelectorProps {
  options?: number[];
  value: number;
  onChange: (value: number) => void;
}

function TipSelector({ options = [5, 10, 15, 25, 50], value, onChange }: TipSelectorProps) {
  const [customTip, setCustomTip] = useState("");

  const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setCustomTip(next);
    onChange(next === "" ? 0 : Number(next));
  };

  const handleRadioChange = (option: number) => {
    setCustomTip("");
    onChange(option);
  };

  return (
    <fieldset className="grid gap-4">
      <legend className="font-bold text-gray-500 mb-2">Select Tip %</legend>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={`tip-${option}`}
              name="tip"
              value={option}
              checked={option === value}
              onChange={() => handleRadioChange(option)}
              className="peer sr-only"
            />
            <label
              htmlFor={`tip-${option}`}
              className="block w-full text-center py-2.5 rounded-md text-2xl font-bold text-white bg-[#00474b] hover:bg-[#26c2ae] hover:text-[hsl(183,100%,15%)] peer-checked:bg-[#9fe8df] peer-checked:text-[hsl(183,100%,15%)] cursor-pointer transition-colors"
            >
              {option}%
            </label>
          </div>
        ))}

        <input
          type="number"
          id="custom-tip"
          name="custom-tip"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomChange}
          aria-label="Custom tip percentage"
          className="w-full text-center py-2.5 rounded-md text-2xl font-bold text-[hsl(183,100%,15%)] bg-[hsl(189,47%,97%)] placeholder:text-[hsl(186,14%,43%)] cursor-pointer"
        />
      </div>
    </fieldset>
  );
}

export default TipSelector;
