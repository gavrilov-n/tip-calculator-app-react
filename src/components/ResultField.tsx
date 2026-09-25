import Calculations from "./Calculations";
import Button from "./Button";

interface ResultFieldProps {
  tipPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
  isResetDisabled: boolean;
}

function ResultField({ tipPerPerson, totalPerPerson, onReset, isResetDisabled }: ResultFieldProps) {
  return (
    <div className="bg-[#00474b] rounded-2xl p-8 flex flex-col md:h-[417px] md:w-[413px]">
      <div>
        <Calculations text="Tip Amount" calculations={tipPerPerson} />
        <Calculations text="Total" calculations={totalPerPerson} />
      </div>
      <Button onClick={onReset} disabled={isResetDisabled} />
    </div>
  );
}

export default ResultField;
