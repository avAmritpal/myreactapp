import React, { useState } from 'react'

const Calculator = () => {
    
    const[data, setData] = useState ('');

    const getValue = (e) => {
        console.log(e.target.value);
        setData (data.concat(e.target.value))
    }

    const calculation = () => {
        setData (eval(data).toString())
    }

    const back = () => {
        setData (data.slice(0,-1))
    }

    const clear = () => {
        setData ('')
    }
    return (
        <div className="container calculator">
            <div className="row text-align-center p-5">

                <h1 className='w-100 text-center pb-4'> Calculator </h1>

                <div className="col-md-3"> </div>


                <div className="col-md-6 form-box">

                    <div className='inputresult'>
                        <input placeholder='0' value={data} />
                    </div>
                    <br />
                    <div className='button-box'>
                        <button onClick={getValue} value="(">(</button>
                        <button onClick={getValue} value=")">)</button>
                        <button onClick={getValue} value="%">%</button>
                        <button onClick={getValue} value="-">-</button>
                        <button onClick={getValue} value="+">+</button>
                        <button onClick={getValue} value="*">*</button>

                        <button onClick={calculation}>=</button>
                        <button onClick={getValue} value="/">/</button>
                        <button onClick={clear} >AC</button>
                        <button onClick={back} >Back</button>



                        <button onClick={getValue} value="9">9</button>
                        <button onClick={getValue} value="8">8</button>
                        <button onClick={getValue} value="7">7</button>
                        <button onClick={getValue} value="6">6</button>
                        <button onClick={getValue} value="5">5</button>
                        <button onClick={getValue} value="4">4</button>
                        <button onClick={getValue} value="3">3</button>
                        <button onClick={getValue} value="2">2</button>
                        <button onClick={getValue} value="1">1</button>
                        <button onClick={getValue} value="0">0</button>

                    </div>


                    <div className="col-md-3"> </div>


                </div>
            </div>
        </div>
    )
};

export default Calculator;
