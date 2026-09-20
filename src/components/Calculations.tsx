

function Calculations() {
    return ( 
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
                <p className="text-white">Total</p>
                <p className="text-gray-400">/ person</p>
              </div>
              <p>$0.00</p>
            </div>
        </div>
     );
}

export default Calculations;