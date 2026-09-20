

function ResultField() {
    return ( 
        <div className="bg-[#00474b] rounded-2xl p-8">
          {/* tip amount row*/}
          <div>
            {/* main section field*/}
            <div className="flex items-center justify-between">
              {/* label text Tip Amount + /person */}
              <div className="flex flex-col">
                <p className="text-white">Tip Amount</p>
                <p className="text-gray-400">/ person</p>
              </div>
              <p>$0.00</p>
            </div>
          </div>
          {/* total row*/}
          <div>
            {/* main section field*/}
            <div>
              {/* label text Total + /person */}
              <div>
                <p>Total</p>
                <p>/ person</p>
              </div>
              <p>$0.00</p>
            </div>
          </div>
          <button type="reset">Reset</button>
        </div>
     );
}

export default ResultField;