import React, { useState } from "react";
import pythonApi from '../services/pythonApi.js';

function ConsumeCalculate () {

const [NumOne, setNumOne] = useState('');
const [NumSecond, setNumSecond] = useState('');
const [result, setResult] = useState(null);


  const handleSubmit = async (Operator) => {
  
        if (NumOne && NumSecond) {
        } else {
          alert("All Fields are Mandatory")
        };

        try {

            var Url = "/calculater-api?NumOne="+NumOne+"&NumSecond="+NumSecond+"&Operator="+Operator;
            debugger;
            const response1 = await pythonApi.CalculatorFun(Url);
           

        if (response1.result) {
            setResult(response1.result); 
            // Assuming the API returns { result: value }
          }
        } catch (err) {
          console.error("API call error:", err);
        }
    }


     


      const DivideValue = async () => {
        try {
            debugger;
            var Url = "/addNum?NumOne=10&NumSecond=26";
            const response1 = await pythonApi.DivideValue(Url);
        //   alert('successfully!');
        } catch (err) {
            debugger;
        //   alert('Failed ');
        }
      };



    return (
    <div className="pai-box">
        <form>

            <label>User Age</label>
            <input className='form-control' name='NumOne' value={NumOne} type='number' onChange={(e) => setNumOne(e.target.value)} />
        
            <input className='form-control' name='NumSecond' value={NumSecond} type='number' onChange={(e) => setNumSecond(e.target.value)} />



            <button type="button" className="btn btn-danger" onClick={() => handleSubmit("/")}>
                 Divide</button>
                  <button type="button" className="btn btn-primary"  onClick={() => handleSubmit("-")} >
                  Minus</button>

                  <button type="button" className="btn btn-primary"   onClick={() => handleSubmit("*")}>
                  Multiple</button>


                  <button type="button" className="btn btn-primary"  onClick={() => handleSubmit("+")}>
                  Plus</button>


        </form>
        {result !== null && (
        <div className="result-box">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
    );
};


export default ConsumeCalculate ;