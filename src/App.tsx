import { useState } from "react";
import NumberField from "./components/NumberField";
import ResultField from "./components/ResultField";
import TipSelector from "./components/TipSelector";
function App() {

  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [nrOfPeople, setNrOfPeople] = useState(0)

  return (
    <>
      <img className="mx-auto my-10" src="../public/images/logo.svg" alt="" />
      {/* main section field*/}
      <section className="bg-white h-screen rounded-t-3xl px-8 py-10">
        {/*bill input*/}
        <NumberField label="Bill" id="bill" value={billAmount} onChange={(newValue) => setBillAmount(Number(newValue))} iconSrc="../public/images/icon-dollar.svg"/>
        {/* tip input radio buttons*/}
        <TipSelector/>
        {/* Nr of people input*/}
        <div>
          <NumberField label="Number of People" id="people" value={nrOfPeople} onChange={(newValue) => setNrOfPeople(Number(newValue))} iconSrc="../public/images/icon-person.svg"/>
        </div>
        <ResultField/>
        
      </section>
    </>
  );
}

export default App;
