import NumberField from "./components/NumberField";
import ResultField from "./components/ResultField";
import TipSelector from "./components/TipSelector";

function App() {
  return (
    <>
      <img className="mx-auto my-10" src="../public/images/logo.svg" alt="" />
      {/* main section field*/}
      <section className="bg-white h-screen rounded-t-3xl px-8 py-10 flex-col">
        {/*bill input*/}
        <NumberField label="Bill" id="bill" iconSrc="../public/images/icon-dollar.svg"/>
        {/* tip input radio buttons*/}
        <TipSelector/>
        {/* Nr of people input*/}
        <div>
          <NumberField label="Number of People" id="bill" iconSrc="../public/images/icon-person.svg"/>
        </div>
        <ResultField/>
      </section>
    </>
  );
}

export default App;
