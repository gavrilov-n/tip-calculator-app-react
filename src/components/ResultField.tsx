import Calculations from "./Calculations";
import Button from "./Button";
function ResultField() {
    return ( 
        <div className="bg-[#00474b] rounded-2xl p-8">
          {/* tip amount row*/}
          <div>
            <Calculations text="Tip Amount" calculations={0.00}/>
            <Calculations text="Total Amount" calculations={0.00}/>
          </div>
          <Button/>
        </div>
     );
}

export default ResultField;