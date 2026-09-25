import { useState } from "react";
import NumberField from "./components/NumberField";
import ResultField from "./components/ResultField";
import TipSelector from "./components/TipSelector";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [nrOfPeople, setNrOfPeople] = useState(0);

  const hasPeopleError = nrOfPeople === 0;
  const tipPerPerson =
    nrOfPeople > 0 ? (billAmount * (tipPercentage / 100)) / nrOfPeople : 0;
  const totalPerPerson =
    nrOfPeople > 0
      ? (billAmount * (1 + tipPercentage / 100)) / nrOfPeople
      : 0;

  const isResetDisabled =
    billAmount === 0 && tipPercentage === 0 && nrOfPeople === 0;

  const handleReset = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNrOfPeople(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10">
      <img className="mx-auto my-10" src="/images/logo.svg" alt="SPLITTER logo" />
      <section className="bg-white w-full max-w-[920px] rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <NumberField
              label="Bill"
              id="bill"
              value={billAmount}
              onChange={(newValue) => setBillAmount(Number(newValue))}
              iconSrc="/images/icon-dollar.svg"
            />
            <TipSelector
              value={tipPercentage}
              onChange={(newValue) => setTipPercentage(newValue)}
            />
            <NumberField
              label="Number of People"
              id="people"
              value={nrOfPeople}
              onChange={(newValue) => setNrOfPeople(Number(newValue))}
              iconSrc="/images/icon-person.svg"
              error={hasPeopleError ? "Can't be zero" : undefined}
            />
          </div>
          <div className="md:flex-1">
            <ResultField
              tipPerPerson={tipPerPerson}
              totalPerPerson={totalPerPerson}
              onReset={handleReset}
              isResetDisabled={isResetDisabled}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
