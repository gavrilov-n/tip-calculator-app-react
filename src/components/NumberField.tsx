interface NumberFieldProps {
  label: string;
  id: string;
  iconSrc: string;
  value: string | number
  onChange: (value: string) => void;
}

function NumberField({ label, id, iconSrc, value, onChange }: NumberFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 mb-8">
      <label htmlFor={id} className="font-bold text-gray-600">
        {label}
      </label>
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
          className="w-full 
          pr-3 
          text-right
        bg-gray-50 p-2.5 
           text-2xl 
           font-bold 
         text-gray-600 
         placeholder:text-gray-500
           border-2
           border-transparent
           rounded-lg
            focus:outline-none
            focus:border-[#26C2AE]
           "
        />
      </div>
    </div>
  );
}

export default NumberField;
