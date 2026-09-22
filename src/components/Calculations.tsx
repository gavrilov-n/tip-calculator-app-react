interface CalculationsProps {
  text: string;
  calculations: number;
}

function Calculations({ text, calculations }: CalculationsProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex flex-col ">
        <p className="text-white">{text}</p>
        <p className="text-gray-400">/ person</p>
      </div>
      <p className="text-[#26c2ae] text-[48px] font-semibold">${calculations}</p>
    </div>
  );
}

export default Calculations;
